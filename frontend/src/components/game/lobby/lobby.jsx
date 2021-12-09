import React from "react";
import '../../../stylesheets/root.scss'
import GameManager from "../../../util/game_socket_util"

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
    const { currentUser, gameCode, game, dispatch } = this.props
    const manager = GameManager(gameCode, dispatch)
    this.props.fetchUser(this.props.currentUser)
    if (!game) {
      manager.getGame(gameCode)
    }
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