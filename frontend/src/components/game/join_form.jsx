import React from "react";

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
        <label>Game Code
          <input type="text"
                 value={this.state.gameKey} 
                 onChange={this.update('gameKey')}/>
        </label>
        <button>Join Game</button>
      </form>
    )
  }
}

export default JoinForm