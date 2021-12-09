import React from "react";
import { gameKey } from "../component_utils/methods";
import '../../stylesheets/root.scss'
import GameManager from "../../util/game_socket_util"

// Name of the game/lobby name
// Max number of players for the game
// Score needed to win
// Key to join the game

class GameForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      gameOwner: this.props.currentUser,
      title: '',
      maxPlayers: 8,
      gameCode: gameKey(6),
      scoreToWin: 8,
      roundTimeLimit: 60
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    // this.props.createGame(this.state)
    const socket = GameManager(this.state.gameCode, this.props.dispatch)
    // ${this.state.gameCode}
    socket.emit(`game:create`, this.state)
    // if succesful it should redirect to a form/page with the games info
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Game Name</label>
            <input type="text"
                   value={this.state.title} 
                   onChange={this.update('title')}/>
        </div>
        <div>
          <label>Max Players</label>
            <input type="number"
                   min="3"
                   max="8"
                   value={this.state.maxPlayers} 
                   onChange={this.update('maxPlayers')}/>
        </div>
        <div>
          <label>Max Score</label>
            <input type="number"
                   min="1"
                   max="15"
                   value={this.state.scoreToWin} 
                   onChange={this.update('scoreToWin')}/>
        </div>
        <div>
          <label>Round Time Limit</label>
            <input type="number"
                   value={this.state.roundTimeLimit} 
                   onChange={this.update('roundTimeLimit')}/>
        </div >
        <div>
          <label>Game Key</label>
            <input type="text"
                   value={this.state.gameCode} 
                   onChange={this.update('gameCode')}
                   />
          </div >
          <button>Create Game</button>
      </form>
    )
  }
}

export default GameForm