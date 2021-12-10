import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'
import GameManager from "../../../util/game_socket_util"
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
    const {game, gameCode, dispatch, categories} = this.props
    // if (!game) {
    //   manager.getGame()
    // }
    // debugger
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
  
  render() {
    const {categories, gameCode, dispatch} = this.props
    this.manager = this.manager ? this.manager : GameManager(gameCode,dispatch)
    // if (categories.length > 0) {
    //   const manager = GameManager(gameCode, dispatch)
    //   setupCards(manager, categories)
    // }

    let zero = 0
    // debugger
    const game = this.props.game ? this.props.game : {players: []}
    const submit = this.props.submittedCards.images ? 
    this.props.submittedCards.images.fixed_height.url : null
    //if round is over, dispatch the function
    // action to dispatch the selected card from the user
    // action has a type, game manager listens
    // game manager changes slice of state when timer runs out
    return (
      <div className='board-container'>
        <div className='topwrap'>
          <header>
            <h2>ROUND {this.props.roundNum}</h2>
            <p>TIME REMAINING </p>
            <Timer 
              remaining={game.roundTimeLimit}
              roundOver={this.props.roundOver}
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
}

export default Board