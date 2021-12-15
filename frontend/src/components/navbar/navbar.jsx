import React from "react";
import { Link } from 'react-router-dom'
import '../../stylesheets/root.scss'
import ReactTooltip from "react-tooltip";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.userNav = this.userNav.bind(this)
  }

  userNav() {
    const user = this.props.currentUser
    return (
      (this.props.auth ? (
        <div className='logged-in'>
          <Link to={`/profile/${user.id}`}>
            <button data-tip data-for="profile-tool" id='display-name'>{user.displayName}</button>
            <ReactTooltip id="profile-tool" place="right" effect="solid">
              Go to your profile to set a favorite gif!
            </ReactTooltip>
          </Link>
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
      <div className='container'>
        <div className='nav'>
          <section id='left-nav'>
            <Link to={`/`}><button>Home</button></Link>
          </section>
          <section id='right-nav'>
            {this.userNav()}
          </section>
        </div>
        <div id="spacer"></div>
      </div>
    )
  }
}

export default Navbar