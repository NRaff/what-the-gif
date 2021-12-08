import React from "react";
import '../../../stylesheets/root.scss'

class Board extends React.Component {
  constructor(props){
    super(props)
    
    this.playerLineup = this.playerLineup.bind(this)
  }
  
  playerLineup(players){
    return(
      players.map((player, i) => (
        <div className='player-card' id={i} key={i}>
          <p>{player.displayName}</p>
        </div>
      ))
    )
  }
  
  render() {
    const testPlayers = [{ displayName: 'test1' }, { displayName: 'test2' }, { displayName: 'test3' }, { displayName: 'test4' }]
    return (
      <div className='board-container'>
        <section className='player-lineup'>
          {this.playerLineup(testPlayers)}
        </section>

        <section className='prompt'>

        </section>

        <section className='player-hand'>

        </section>
      </div>
    )
  }
}

export default Board