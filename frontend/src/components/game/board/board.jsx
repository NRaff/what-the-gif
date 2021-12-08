import React from "react";
import '../../stylesheets/root.scss'

class Board extends React.Component {
  constructor(props){
    super(props)
    
    this.players = this.players.bind(this)
  }
  
  playerLineup(players){
    players.map((player, i) => (
      <div className='player-card' id={i} key={i}>
        <p>{player.displayName}</p>
      </div>
    ))
  }
  
  render() {
    return (
      <div className='board-container'>
        <section className='player-lineup'>
          {this.playerLineup(this.props.players)}
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