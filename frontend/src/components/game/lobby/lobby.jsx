import React from "react";
import '../../../stylesheets/root.scss'

export const playerIndex = (players) => {
  return (
    players.map((player, i) => (
      <div className='player-card' id={i} key={i}>
        {player.favGIF ? (<img src={player.favGIF} alt="favGIF" />) : null}
        <div id='shade' />
        <p>{player.displayName}</p>
      </div>
    ))
  )
}

class Lobby extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerId: this.props.currentUser,
      gameCode: this.props.gameCode
    }

    this.startGame = this.startGame.bind(this)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser)
  }

  startGame(){
    this.props.history.push(`/game/${this.props.gameCode}`)
  }

  render() {
    // const testPlayers = [{ displayName: 'test1' }, { displayName: 'test2' }, { displayName: 'test3' }, { displayName: 'test4' }]
    return (
      <div className='lobby-container'>
        <header>
          <h1>Waiting for players to join...</h1>
          <h2>Game Code:</h2><p>{this.props.gameCode}</p>
          <h2>Players:</h2>
        </header>
        <section className='player-lineup'>
          {playerIndex(this.props.players)}
        </section>
        <section className='start-game'>
          <button onClick={this.startGame}>Start Game</button>
        </section>
      </div>
    )
  }
}

export default Lobby