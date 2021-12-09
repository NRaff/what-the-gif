import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'
import GameManager from "../../../util/game_socket_util"
import Categories from "../../categories/categories_container";

class Board extends React.Component {
  constructor(props){
    super(props)
    this.count = (this.props.game ? this.props.game.roundTimeLimit : 60)

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
          <p>{player.score}</p>
        </div>
      ))
    )
  }

  timer(){
    this.count -= 1
    return (<p>{this.count}</p>)
  }

  timeInt(){
    let time = setInterval(this.timer, 60000)
  }
  
  render() {
    const game = this.props.game ? this.props.game : {players: []}
    return (
      <div className='board-container'>
        <header>
          <h2>ROUND 1</h2>
          <div id='round-timer'>
            {this.timeInt()}
          </div>
        </header>
        <section className='player-lineup'>
          {playerIndex(this.props.users)}
          {this.scores(this.props.users)}
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