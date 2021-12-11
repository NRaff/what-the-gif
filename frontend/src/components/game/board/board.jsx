import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'
import { manager } from "../../../util/game_socket_util"
import Categories from "../../categories/categories_container";
import { setupCards } from "../../../util/game_setup";
import Timer from './timer'
import Endgame from "../endgame/endgame_container";

class Board extends React.Component {
  constructor(props){
    super(props)


    this.scores = this.scores.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.manager = undefined;
  }

  componentDidMount(){
    // can't be in component did mount because it will be called by all clients
    const {currentUser, game} = this.props
    if (currentUser.id === game.gameOwner) {
      this.setupBoard()
    }
  }

  scores(players){
    return (
      players.map((player, i) => {
        if (i > 0 && player._id === players[i-1]._id) return null
        else return(
          <div className='scorecard' id={i} key={i}>
            <p>Score: {player.roundsWon.length}</p>
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
    const {players, gameDeck, gameCode, dispatch} = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    players.forEach((player,idx) => {
      const start = idx * 5
      const end = start + 5
      const cards = gameDeck.slice(start, end)
      debugger
      this.manager.sendToGame({
        type: "DEAL_HAND", 
        payload: this.dealHandPayload(player, cards)
      })

    })
  }

  renderBoard(){
    const { gameCode, dispatch } = this.props
    this.manager = this.manager ? this.manager : manager(gameCode, dispatch)
    let zero = 0
    const game = this.props.game ? this.props.game : { players: [] }
    const submit = this.props.submittedCards.images ?
      this.props.submittedCards.images.fixed_height.url : null
    return (
      <div className='board-container'>
        <div className='topwrap'>
          <header>
            <h2>ROUND {this.props.roundNum}</h2>
            <p>TIME REMAINING </p>
            <Timer
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
          <div id='cat-info'>
            <h2>CATEGORY</h2>
            <Categories gameCode={gameCode} gameManager={this.manager} />
          </div>
          <div id='select'>
            {submit ? <img src={submit} alt="" /> : null}
          </div>
        </section>
        <section className='player-hand'>
          <Hand />
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