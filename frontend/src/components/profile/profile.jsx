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
        <table>
          <th></th>
          <tr id='p-info'>
            <td>
              <h2>Display Name:</h2>
            </td> 
            <td>{user.displayName}</td>
          </tr>
          <tr id='p-info'><td><h2>Email:</h2></td> <td>{user.email}</td></tr>
        </table>
      </div>
    )
  }
}

export default Profile