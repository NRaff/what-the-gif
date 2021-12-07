import React from "react";
import { Link } from 'react-router-dom'
import '../../stylesheets/root.scss'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    const user = this.props.currentUser
    return(
      <div id='profile-module'>
        <h1>User Profile</h1>
        <div id='p-info'><h2>Display Name:</h2> <p>{user.displayName}</p></div>
        <div id='p-info'><h2>Email:</h2> <p>{user.email}</p></div>
      </div>
    )
  }
}

export default Profile