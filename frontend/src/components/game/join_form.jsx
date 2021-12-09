import React from "react";
import '../../stylesheets/root.scss'

class JoinForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playerId: this.props.currentUser,
      gameCode: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.joinGame(this.state)
    this.props.history.push(`/lobby${this.state.gameCode}`)
  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>Game Code</label>
          <input type="text"
                 value={this.state.gameCode} 
                 onChange={this.update('gameCode')}/>
        </div>
        <button>Join Game</button>
      </form>
    )
  }
}

export default JoinForm