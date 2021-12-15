import React from "react";
import { gameKey } from "../component_utils/methods";
import '../../stylesheets/root.scss'
import {setupGameSocket} from "../../util/game_socket_util"

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
    this.manager = undefined
    this.handleSubmit = this.handleSubmit.bind(this)
    this.game = this.props.games
  }

  handleSubmit(e){
    e.preventDefault()
    const {gameCode} = this.state
    const {dispatch, errors} = this.props
    
    this.manager = this.manager ? this.manager : setupGameSocket(gameCode, dispatch)
    this.manager.createGame(this.state)
   
  }

  componentDidUpdate(){
    const {games} = this.props
    if (games.length > 0) {
      this.props.history.push(`/lobby/${this.state.gameCode}`)
    }
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    const {errors} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Game Name</label>
            <input type="text"
                   value={this.state.title} 
                   onChange={this.update('title')}/>
        </div>
        {errors ? errors.title : ''}
        <div>
          <label>Max Players</label>
            <input type="number"
                   min="3"
                   max="8"
                   value={this.state.maxPlayers} 
                   onChange={this.update('maxPlayers')}/>
        </div>
        {errors ? errors.maxPlayers : ''}
        <div>
          <label>Max Score</label>
            <input type="number"
                   min="1"
                   max="15"
                   value={this.state.scoreToWin} 
                   onChange={this.update('scoreToWin')}/>
        </div>
        {errors ? errors.scoreToWin : ''}
        <div>
          <label>Round Time Limit</label>
            <input type="number"
                   value={this.state.roundTimeLimit} 
                   onChange={this.update('roundTimeLimit')}/>
        </div >
        {errors ? errors.roundTimeLimit : ''}
        <div>
          <label>Game Key</label>
            <input type="text"
                   value={this.state.gameCode} 
                   onChange={this.update('gameCode')}
                   />
          </div >
        {errors ? errors.gameCode : ''}
          <button>Create Game</button>
      </form>
    )
  }
}

export default GameForm