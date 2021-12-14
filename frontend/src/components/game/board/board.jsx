import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'
import { manager } from "../../../util/game_socket_util"
import Categories from "../../categories/categories_container";
import Timer from './timer'
import Endgame from "../endgame/endgame_container";
// import CardContainer from "../hand/card_container"
import {SubmittedCardContainer} from "../hand/card_container"
import { toggleShowSubmitted } from "../../../actions/ui_actions";

class Board extends React.Component {
  constructor(props){
    super(props)
    this.scores = this.scores.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.manager = undefined;
    this.showSubmitted = this.showSubmitted.bind(this)
  }

  componentDidMount(){
    const {currentUser, game} = this.props
    if (currentUser.id === game.gameOwner) {
      this.setupBoard()
    }
  }

  scores(players){
    let playerArr = []
    return (
      players.map((player, i) => {
        if (i > 0 && playerArr.includes(player.user)) return null
        else {
          playerArr.push(player.user)
          return(
            <div className='scorecard' id={i} key={i}>
              <p>Score: {player.roundsWon.length}</p>
            </div>
          )
        }
      })
    )
  }

  handleClick(){
    this.props.resetRound()
    this.props.nextRound()
  }

  dealHandPayload(player, cards) {
    const payload = {
      user: player._id,
      cards: cards
    }
    return payload
  }

  setupBoard(){
    const {players, gameDeck, gameCode, dispatch} = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    players.forEach((player,idx) => {
      const start = idx * 5
      const end = start + 5
      const cards = gameDeck.slice(start, end)
      this.manager.sendToGame({
        type: "DEAL_HAND", 
        payload: this.dealHandPayload(player, cards)
      })
    })
  }

  showSubmitted(){
    const { currentUser, game, gameCode, showSubmitted, currentRound } = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    if (currentUser.id === currentRound.judge) {
      this.manager.sendToGame(toggleShowSubmitted())
    }
  }

  renderWinner(){
    const { roundWinnerChosen, currentRound, players, currentUser, playedCards } = this.props
    if (roundWinnerChosen) {
      const winningPlayer = players.filter(player => player._id === currentRound.winner)[0]
      const winningGif = playedCards[currentRound.winningGif]
      return (
        <div id='inner-win-wrap'>
        <div className="winning-card" id='select'>
          <img src={winningGif.images.fixed_height.url} alt="the winning gif" />
          <h3>WINNER: {winningPlayer.displayName}</h3>
          </div>
          {currentRound.judge === currentUser.id ? (
            <button>Next Round</button>
          ) : null}
        
        </div>
      )
    } else {
      return (null)
    }
  }

  renderSubmitted(){
    const {players, submittedCards, showSubmitted} = this.props
    const submissions = Object.values(submittedCards)
    if (showSubmitted && submissions.length > 0) {
      return (
        <div id='show-wrap'>
          <div className="show-modal">
            {players.map(player => {
              return (
                <SubmittedCardContainer
                  card={submittedCards[player._id]}
                  playerId={player._id}
                  key={submittedCards[player._id].gifId}
                />
              )
            })}
          </div>
        </div>
      )
    } else if (showSubmitted && submissions.length === 0) {
      return (<p>No cards were played this round!</p>)
    }
    else {
      return null
    }
  }

  renderTimer() {
    const { game, timesUp, currentUser, currentRound} = this.props
    if (!timesUp) {
      return (
        <>
          <p>TIME REMAINING </p>
          <Timer
            currentUser={this.props.currentUser.id}
            gameOwner={game.gameOwner}
            remaining={game.roundTimeLimit}
            resetRound={this.props.resetRound}
            nextRound={this.props.nextRound}
            nextCategory={this.props.nextCategory}
            removeCard={this.props.removeCard}
            submit={this.props.submittedCards}
            gameManager={this.manager}
            roundNum={this.props.roundNum}
            category={this.props.categories[0]}
          />
        </>
      )
    } else {
      return (
        <>
          <span>Times up!</span>
          {currentUser.id === currentRound.judge ? (
            <button
              onClick={() => this.showSubmitted()}
            >Show Cards</button>
          ) : null}
        </>
      )
    }
  }

  renderBoard(){
    const { gameCode, dispatch } = this.props
    this.manager = this.manager ? this.manager : manager(gameCode, dispatch)

    const submissions = Object.values(this.props.submittedCards)
    const userIds = Object.keys(this.props.submittedCards)
    const idx = userIds.indexOf(this.props.currentUser.id)
    const submit = submissions.map(submission => submission.images.fixed_height.url)

    return (
      <div className='board-container'>
        <div className='topwrap'>
          <header>
            <h2>ROUND {this.props.roundNum}</h2>
            {this.renderTimer()}
          </header>
          <div id='game-info'>
            <div className='player-lineup'>
              {playerIndex(this.props.users)}
            </div>
            <div id='scores'>
              {this.props.game ? this.scores(this.props.game.players) : null}
            </div>
          </div>
        </div>
        <section className='categories'>
          
          <div id="select-wrap">
          <div id='cat-info'>
            <h2>CATEGORY</h2>
            <Categories gameCode={gameCode} gameManager={this.manager} />
          </div>
            <div className="winner-wrap">
              {this.renderWinner()}
            </div>
          
            
              {submit[idx] && !this.props.timesUp ? 
              <div id='select'>
              <img src={submit[idx]} alt="" /> 
              <h2>YOUR SELECTION</h2>
              </div>
              : <div id='noselect'></div>}
              
            
          </div>
          
        </section>
        <section className='player-hand'>
          {this.props.timesUp ? null : <Hand />}
          {this.renderSubmitted()}
        </section>

        {/* {this.props.over ? 
        <button onClick={this.handleClick}>Reset Round</button> : null }
        <section className='gameisover'>
          <Endgame />
        </section> */}
      </div>
    )
  }

  renderLoading(){
    return (
      <h1>Setting up your game...</h1>
    )
  }
  
  render() {
    const {players, gameDeck, categories} = this.props
    if (
      players.length > 0 &&
      gameDeck.length > 0 &&
      categories.length > 0
    ) {
      return (
        this.renderBoard()
      )
    } else {
      return (
        this.renderLoading()
      )
    }
  }
}

export default Board