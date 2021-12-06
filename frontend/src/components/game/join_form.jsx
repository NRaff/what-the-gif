import React from "react";

class JoinForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      gameKey: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.gameKey === this.props.game.gameCode) {
      this.props.joinGame(this.state)
    } else {
      // Figure out what to do if the keys do not match
      // Display the errors may be on the validation side
      null
    }
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input type="text"
                 value={this.state.name} 
                 onChange={this.update('name')}/>
        </label>
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