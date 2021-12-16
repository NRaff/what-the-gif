import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'
import { manager } from "../../../util/game_socket_util"
import CategoriesContainer from "../../categories/categories_container";
import Timer from './timer'
import {SubmittedCardContainer} from "../hand/card_container"
import { NEXT_ROUND, toggleShowSubmitted } from "../../../actions/ui_actions";
// import { RECEIVE_ROUND } from "../../../actions/round_actions";
import EndGameContainer from "../../game/endgame/endgame_container"
import { getGameContent } from "../../../util/game_setup";

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
    const gameManager = manager(game.gameCode)
    if (currentUser.id === game.gameOwner) {
      // setup game
      if(!this.hasContent()) {
        getGameContent(gameManager)
          .then(() => {
            this.setupBoard()
          })
      }
    }
  }

  hasContent(){
    const {gameDeck, players, categories} = this.props
    if (gameDeck.length > 0 && players.length > 0 && categories.length > 0) return true
    return false
  }

  scores(players){
    const {game} = this.props
    return (
      players.map((player, i) => {
        const playerObj = game.players.filter(obj => obj.user === player._id)[0]
        return(
          <div className='scorecard' id={i} key={i}>
            <p>Score: {playerObj.roundsWon.length}</p>
          </div>
        )
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
    if (!this.hasContent()) {
      setTimeout(this.setupBoard.bind(this), 3000)
    } else {
      const { players, gameDeck, gameCode } = this.props
      this.manager = this.manager ? this.manager : manager(gameCode)
      // debugger
      players.forEach((player, idx) => {
        const start = idx * 5
        const end = start + 5
        const cards = gameDeck.slice(start, end)
        this.manager.sendToGame({
          type: "DEAL_HAND",
          payload: this.dealHandPayload(player, cards)
        })
      })
    }
  }

  showSubmitted(){
    const { currentUser, gameCode, currentRound } = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    if (currentUser.id === currentRound.judge) {
      this.manager.sendToGame(toggleShowSubmitted())
    }
  }

  getNextJudge(){
    const {currentRound, players} = this.props
    for(let i=0; i < players.length; i++) {
      if(currentRound.judge === players[i]._id) {
        if(i === players.length - 1) {
          return players[0]._id
        } else {
          return players[i + 1]._id
        }
      }
    }
  }

  setRound(){
    const { currentRound } = this.props
    return ({
      id: currentRound.id + 1,
      winner: null,
      winningGif: null,
      judge: this.getNextJudge(),
      category: currentRound.category + 1,
      submittedGifs: []
    })
  }

  nextRound(){
    const {gameCode, players, gameDeck} = this.props
    const gameManager = manager(gameCode)
    // deal card to each player
    gameManager.sendToGame({
      type: NEXT_ROUND,
      round: this.setRound()
    })
    const playersNeedCard = players.filter(player => player.curHand.length < 5)
    playersNeedCard.forEach((player, idx) => {
      const payload = {
        type: 'DEAL_CARD',
        user: player,
        card: gameDeck[idx]
      }
      gameManager.sendToGame(payload)
    })
  }

  renderWinner(){
    const { roundWinnerChosen, currentRound, players, currentUser, playedCards } = this.props
    if (roundWinnerChosen && currentRound.submittedGifs.length > 0) {
      const winningPlayer = players.filter(player => player._id === currentRound.winner)[0]
      const winningGif = playedCards[currentRound.winningGif]
      return (
        <div id='inner-win-wrap'>
        <div className="winning-card" id='select'>
          <img src={winningGif.images.fixed_height.url} alt="the winning gif" />
          <h3>WINNER: {winningPlayer.displayName}</h3>
          </div>
          {currentRound.judge === currentUser.id ? (
            <button 
              onClick={() => this.nextRound()}
            >Next Round</button>
          ) : null}
        
        </div>
      )
    } else {
      return (null)
    }
  }

  renderSubmitted(){
    const { players, submittedCards, showSubmitted, currentRound, currentUser} = this.props
    const submissions = Object.values(submittedCards)
    const submitterIds = Object.keys(submittedCards)
    if (showSubmitted && submissions.length > 0) {
      return (
        <div id='show-wrap'>
          <div className="show-modal">
            <div className="judge-text">
              { (currentRound.judge === currentUser.id) ?
              <h4>You are the judge. Select the best GiF!</h4> : <h4>Awaiting Judgement</h4>
            }
            </div>
            <div className="modal-player">
              {submitterIds.map(player => {
                if(player !== currentRound.judge) {
                  return (
                    <SubmittedCardContainer
                      card={submittedCards[player]}
                      playerId={player}
                      key={submittedCards[player].gifId}
                    />
                  )
                } else {return null}
              })}
            </div>
          </div>
        </div>
      )
    } else if (showSubmitted && submissions.length === 0) {
      return (
      <>
        <h4>No cards were played this round!</h4>
          {this.props.currentRound.judge === this.props.currentUser.id ? (
            <button 
              onClick={() => this.nextRound()}
            >Next Round</button>
          ) : null}
      </>
      )
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
            <button id='show-cards'
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
              {this.props.game ? this.scores(this.props.players) : null}
            </div>
          </div>
        </div>
        <section className='categories'>
          <div id="select-wrap">
            <div id='cat-info'>
              <h2>CATEGORY</h2>
              <CategoriesContainer gameCode={gameCode} gameManager={this.manager} />
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
      </div>
    )
  }

  renderLoading(){
    return (
      <h1>Setting up your game...</h1>
    )
  }

  renderGameplay(){
    const { players, gameDeck, categories } = this.props
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
  
  render() {
    //check if gamedeck, categories, users exist before anything else
    const { game, players } = this.props
    const dealComplete = players.every(player => player.curHand.length >= 4)
    if (this.hasContent() && dealComplete){
      if (game.winner) {
        return (
          <EndGameContainer />
        )
      } else {
        return (this.renderGameplay())
      }
    } else {
      return (
        <h1>Setting up your game...</h1>
      )
    }
  }
}

export default Board