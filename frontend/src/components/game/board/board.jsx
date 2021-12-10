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
  }

  componentDidMount(){
    const {game, gameCode, dispatch, categories} = this.props
    const manager = GameManager(gameCode, dispatch)
    if (!game) {
      manager.getGame()
    }
    if (categories.length > 0) {
      setupCards(manager, categories)
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
  
  render() {
    const game = this.props.game ? this.props.game : {players: []}
    return (
      <div className='board-container'>
        <div className='topwrap'>
          <header>
            <h2>ROUND 1</h2>
            <p>TIME REMAINING </p>
            <Timer remaining={game.roundTimeLimit} />
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
          <h2>CATEGORY</h2>
          <Categories />
        </section>
        <section className='player-hand'>
          <Hand />
        </section>
        {/* <section className='gameisover'>
          <Endgame />
        </section> */}
      </div>
    )
  }
}

export default Board