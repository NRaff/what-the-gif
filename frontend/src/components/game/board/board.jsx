import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'
import GameManager from "../../../util/game_socket_util"
import Categories from "../../categories/categories_container";
import Timer from './timer'

class Board extends React.Component {
  constructor(props){
    super(props)

    this.scores = this.scores.bind(this)
  }

  componentDidMount(){
    const {game, gameCode, dispatch} = this.props
    if (!game) {
      const manager = GameManager(gameCode, dispatch)
      manager.getGame()
    }
  }

  scores(players){
    return (
      players.map((player, i) => (
        <div className='scorecard' id={i} key={i}>
          <p>Score: {player.roundsWon.length}</p>
        </div>
      ))
    )
  }
  
  render() {
    // let time = setTimeout(() => {
    //   this.setState({ count: this.state.count - 1 })
    // }, 1000)
    const game = this.props.game ? this.props.game : {players: []}
    return (
      <div className='board-container'>
        <header>
          <h2>ROUND 1</h2> 
          <p>TIME REMAINING:</p>
          {/* <Timer /> */}
        </header>
        <div className='player-lineup'>
          {playerIndex(this.props.users)}
        </div>
        <section id='scores'>
          {this.props.game ? this.scores(this.props.game.players) : null}
        </section>
        <section className='categories'>
          <h2>CATEGORY</h2>
          <Categories />
        </section>
        <section className='player-hand'>
          <Hand />
        </section>
      </div>
    )
  }
}

export default Board