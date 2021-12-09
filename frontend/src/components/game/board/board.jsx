import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'
import GameManager from "../../../util/game_socket_util"

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
          <p>{player.score}</p>
        </div>
      ))
    )
  }

  componentDidMount(){
    // this.props.fetchCards()
  }
  
  render() {
    // const testPlayers = [{ displayName: 'test1' }, { displayName: 'test2' }, { displayName: 'test3' }, { displayName: 'test4' }]
    const game = this.props.game ? this.props.game : {players: []}
    return (
      <div className='board-container'>
        <section className='player-lineup'>

          {playerIndex(this.props.users)}

        </section>
        <section className='scores'>
          
        </section>

        <section className='prompt'>

        </section>

        <section className='player-hand'>
          <Hand />
        </section>
      </div>
    )
  }
}

export default Board