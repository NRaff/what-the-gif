import React from "react";

class SessionForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.action(this.state)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }
  
  renderLogin(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update('email')} />
        </label>
        <label>Password
          <input type="text" value={this.state.password} onChange={this.update('password')} />
        </label>
        <button>{this.props.formType}</button>

      </form>  
    )
  }
  renderSignup(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Display Name
          <input type="text" value={this.state.displayName} onChange={this.update('displayName')} />
        </label>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update('email')} />
        </label>
        <label>Password
          <input type="text" value={this.state.password} onChange={this.update('password')} />
        </label>
        <label>Confirm Password
          <input type="text" value={this.state.password2} onChange={this.update('password2')} />
        </label>
        <button value={this.state.formType}> {this.props.formType}</button>

      </form>  
    )
  }

  

  render(){
    if (this.props.formType === 'Sign Up'){

      return(
        <>
          {this.renderSignup()}
        </>

      )
    } else {
      return (
        <>
          {this.renderLogin()}
        </>
      )
    }
  }
}

export default SessionForm