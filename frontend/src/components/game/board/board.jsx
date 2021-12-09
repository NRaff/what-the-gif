import React from "react";
import '../../../stylesheets/root.scss'
import Hand from "../hand/hand_container";
import {playerIndex} from '../lobby/lobby'

class Board extends React.Component {
  constructor(props){
    super(props)

    this.scores = this.scores.bind(this)
  }

  scores(playerScores){
    return (
      playerScores.map((player, i) => (
        <div className='player-card' id={i} key={i}>
          {player.favGIF ? (<img src={player.favGIF} alt="favGIF" />) : null}
          <div id='shade' />
          <p>{player.displayName}</p>
        </div>
      ))
    )
  }
  
  render() {
    // const testPlayers = [{ displayName: 'test1' }, { displayName: 'test2' }, { displayName: 'test3' }, { displayName: 'test4' }]
    return (
      <div className='board-container'>
        <section className='player-lineup'>
          {playerIndex(this.props.players)}
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