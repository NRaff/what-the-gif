import React from "react";
import '../../stylesheets/root.scss'
import GameManager from "../../util/game_socket_util"

class JoinForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playerId: this.props.currentUser,
      gameCode: ''
    }
    this.manager = undefined
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    const {gameCode} = this.state
    const {dispatch} = this.props
    this.manager = this.manager ? this.manager : GameManager(gameCode, dispatch)
    this.manager.joinGame(this.state)
    // ! Need to determine how to avoid pushing to the lobby unless success
    this.props.history.push(`/lobby/${gameCode}`)
  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>Game Code</label>
          <input 
            type="text"
            value={this.state.gameCode} 
            onChange={this.update('gameCode')}
          />
        </div>
        <button>Join Game</button>
      </form>
    )
  }
}

export default JoinForm