import React from "react";
import { gameKey } from "../component_utils/methods";

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
    this.props.createGame(this.state)
    // if succesful it should redirect to a form/page with the games info
    
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Game Name
            <input type="text"
                   value={this.state.title} 
                   onChange={this.update('title')}/>
          </label>
          <label>Max Players
            <input type="number"
                   min="3"
                   max="8"
                   value={parseInt(this.state.maxPlayers)} 
                   onChange={this.update('maxPlayers')}/>
          </label>
          <label>Max Score
            <input type="text"
                   value={this.state.scoreToWin} 
                   onChange={this.update('scoreToWin')}/>
          </label>
          <label>Round Time Limit
            <input type="text"
                   value={this.state.roundTimeLimit} 
                   onChange={this.update('roundTimeLimit')}/>
          </label>
          <label>Game Key
            <input type="text"
                   value={this.state.gameCode} 
                   onChange={this.update('gameCode')}
                   />
          </label>
          <button>Create Game</button>
      </form>
    )
  }
}

export default GameForm