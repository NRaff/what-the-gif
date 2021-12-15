import React from "react";
import '../../../stylesheets/root.scss'
import { setupGame } from "../../../util/game_setup";
import { manager } from "../../../util/game_socket_util"

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
    this.manager = undefined;
  }

  componentDidMount(){
    const { gameCode, game } = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    //this currently runs for every single person that joins
    // setupGame(this.manager)
  }

  firstRound = () => ({
    id: 1,
    winner: null,
    winningGif: null,
    judge: this.props.players[0]._id,
    category: 0,
    submittedGifs: []
  })

  startGame(){
    const {game,gameCode} = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    this.manager.sendToGame({type: 'GAME_STARTED', round: this.firstRound()})
    this.props.history.push(`/game/${gameCode}`)
  }

  goToGame(){
    const {game, gameCode, history} = this.props
    history.push(`/game/${gameCode}`)
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
        <section className="player-wrap">
          <div className='player-lineup'>
            {playerIndex(this.props.players)}
          </div>
        </section>
        <section className='start-game'>
          <button onClick={this.startGame}>Start Game</button>
        </section>
      </div>
    )
  }
}

export default Lobby