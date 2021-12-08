import React from "react";
import '../../../stylesheets/root.scss'

class Lobby extends React.Component {
  constructor(props) {
    super(props)

    this.playerLineup = this.playerLineup.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser)
  }

  playerLineup(players) {
    return (
      players.map((player, i) => (
        <div className='player-card' id={i} key={i}>
          <p>{player.displayName}</p>
        </div>
      ))
    )
  }

  startGame(){
    this.props.history.push('/game')
  }

  render() {
    const testPlayers = [{ displayName: 'test1' }, { displayName: 'test2' }, { displayName: 'test3' }, { displayName: 'test4' }]
    return (
      <div className='lobby-container'>
        <section className='player-lineup'>
          {this.playerLineup(this.props.players)}
        </section>
        <section className='start-game'>
          <button onClick={this.startGame}>Start Game</button>
        </section>
      </div>
    )
  }
}

export default Lobby