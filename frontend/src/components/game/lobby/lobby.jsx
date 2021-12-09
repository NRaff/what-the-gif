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

    // this.playerLineup = this.playerLineup.bind(this)
    this.startGame = this.startGame.bind(this)
  }

  componentDidMount(){
    const { currentUser, gameCode } = this.props
    this.props.fetchUser(this.props.currentUser)
    // get the game too if it doesn't already exist
  }

  // playerLineup(players) {
  //   return (
  //     players.map((player, i) => (
  //       <div className='player-card' id={i} key={i}>
  //         {player.favGIF ? (<img src={player.favGIF} alt="favGIF" />) : null}
  //         <div id='shade' />
  //         <p>{player.displayName}</p>
  //       </div>
  //     ))
  //   )
  // }

  startGame(){
    const {game} = this.props
    debugger
    this.props.history.push(`/game/${game.gameCode}`)
  }

  render() {
    // const testPlayers = [{ displayName: 'test1' }, { displayName: 'test2' }, { displayName: 'test3' }, { displayName: 'test4' }]
    return (
      <div className='lobby-container'>
        <h1>Waiting for players to join...</h1>
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