import React from "react";
import '../../stylesheets/root.scss'
import { gameKey } from "../component_utils/methods";
import { Link } from "react-router-dom";

class SessionForm extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.anonLogin = this.anonLogin.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
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

  componentWillUnmount(){
    this.props.clearErrors()
  }

  anonLogin(){
    let pass = gameKey(8)
    this.setState({
      displayName: gameKey(6),
      email: gameKey(7) + '@whatthegif.com',
      password: pass,
      password2: pass
    })
  }
  
  renderLogin(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email </label>
          <input type="text" value={this.state.email} onChange={this.update('email')} onFocus={this.handleFocus} />
        </div>
        {this.props.errors ? this.props.errors.email : ''}
        <div>
          <label>Password </label>
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </div>
        {this.props.errors ? this.props.errors.password : ''}
        <div>No account? <Link to='/signup'>Sign Up</Link></div>
        <button onClick={this.handleSubmit}>{this.props.formType}</button>
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
        {this.props.errors ? this.props.errors.displayName : ''}
        <div>
          <label>Email</label>
          <input type="text" value={this.state.email} onChange={this.update('email')} />
        </div>
        {this.props.errors ? this.props.errors.email : ''}
        <div>
          <label>Password</label>
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </div>
        {this.props.errors ? this.props.errors.password : ''}
        <div>
          <label>Confirm Password</label>
          <input type="password" value={this.state.password2} onChange={this.update('password2')} />
        </div>
        {this.props.errors ? this.props.errors.password2 : ''}
        <div>Already have an account? <Link to='/login'>Log In</Link></div>
        <button onClick={this.anonLogin}>Generate Anonymous Login</button>
        <button value={this.state.formType}> {this.props.formType}</button>
      </form>  
    )
  }

  render(){
    let action = this.renderSignup()
    if (this.props.formType === 'Log In'){action = this.renderLogin()}

    return(
      <div id='form'>
        {action}
      </div>
    )
  }
}

export default SessionForm