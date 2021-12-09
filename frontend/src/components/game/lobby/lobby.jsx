import React from "react";
import '../../../stylesheets/root.scss'
import { setupGameDeck } from "../../../util/game_setup";
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
    this.state = {
      playerId: this.props.currentUser,
      gameCode: this.props.gameCode
    }
    this.startGame = this.startGame.bind(this)
  }

  componentDidMount(){
    const { gameCode, game, dispatch } = this.props
    const manager = GameManager(gameCode, dispatch)
    if (!game) {
      manager.getGame()
    }
  }

  startGame(){
    const {game,gameCode,dispatch} = this.props
    const manager = GameManager(gameCode, dispatch)
    manager.sendToGame({type: 'GAME_STARTED'})
    setupGameDeck(manager)
      .then(() => {
        this.props.history.push(`/game/${game.gameCode}`)
      })
    
  }

  goToGame(){
    const {game, history} = this.props
    history.push(`/game/${game.gameCode}`)
  }

  render() {
    const {gameStatus} = this.props
    if (gameStatus) {
      this.goToGame()
    }
    return (
      <div className='lobby-container'>
        <header>
          <h1>Waiting for players to join...</h1>
          <h2>Game Code:</h2><p>{this.props.gameCode}</p>
          
        </header>
          <h2>Players:</h2>
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