import React from "react";
import '../../stylesheets/root.scss'

class JoinForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playerId: this.props.currentUser,
      gameKey: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.joinGame(this.state)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>Game Code</label>
          <input type="text"
                 value={this.state.gameKey} 
                 onChange={this.update('gameKey')}/>
        </div>
        <button>Join Game</button>
      </form>
    )
  }
}

export default JoinForm