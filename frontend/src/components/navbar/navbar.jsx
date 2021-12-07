import React from "react";
import { Link } from 'react-router-dom'
import '../../stylesheets/root.scss'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.userNav = this.userNav.bind(this)
  }

  userNav() {
    return (
      (this.props.auth ? (
        <div className='logged-in'>
          <button id='display-name'>{this.props.currentUser.displayName}</button>
          <button id='log-out' onClick={this.props.logout}>Log Out</button>
        </div>
      ) : (
        <div className='logged-out'>
          <Link to='/signup'>
            <button id='sign-up-button'>Sign Up</button>
          </Link >
          <Link to='/login'>
            <button id='log-in-button'>Log In</button>
          </Link>
        </div >
      )))
  }

  render() {
    return (
      <div className='nav'>
      <div id='left-nav'>
        <Link to={`/`}><button>Home</button></Link>
      </div>
      <div id='right-nav'>
        {this.userNav()}
      </div>
      </div>
    )
  }
}

export default Navbar