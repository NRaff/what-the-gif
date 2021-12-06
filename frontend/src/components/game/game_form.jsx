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
      title: '',
      numPlayers: '',
      gameCode: gameKey(6),
      scoreToWin: '',
      //players: {}? not sure about this one
      roundTimeLimit: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.createGame(this.state)
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
                   value={parseInt(this.state.numPlayers)} 
                   onChange={this.update('numPlayers')}/>
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
                   />
          </label>
          <button>Create Game</button>
      </form>
    )
  }
}

export default GameForm