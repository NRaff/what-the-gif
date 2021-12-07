import React from "react";
import '../../stylesheets/root.scss'

class SessionForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.action(this.state)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleFocus(){
  }
  
  renderLogin(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email </label>
          <input type="text" value={this.state.email} onChange={this.update('email')} onFocus={this.handleFocus} />
        </div>
        <div>
          <label>Password </label>
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </div>
        <button>{this.props.formType}</button>
      </form>  
    )
  }
  renderSignup(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Display Name</label>
          <input type="text" value={this.state.displayName} onChange={this.update('displayName')} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={this.state.email} onChange={this.update('email')} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={this.state.password2} onChange={this.update('password2')} />
        </div>
        <button value={this.state.formType}> {this.props.formType}</button>
      </form>  
    )
  }

  render(){
    let action = this.renderSignup()
    if (this.props.formType === 'Login'){action = this.renderLogin()}

    return(
      <>
        {action}
      </>
    )
  }
}

export default SessionForm