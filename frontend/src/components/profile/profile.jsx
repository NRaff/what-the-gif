import React from "react";
// import { Link } from 'react-router-dom'
import '../../stylesheets/root.scss'
import SearchBar from "../searchbar/searchbar_container";

class Profile extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render(){
    const user = this.props.currentUser
    return(
      <div id='profile-module'>
        <h1>User Profile</h1>
        <table>
          <tbody>
          <tr id='p-info'>
            <td>
              <h2>Display Name:</h2>
            </td> 
            <td>
              <p>{user.displayName}</p>
            </td>
          </tr>
            <tr id='p-info'>
              <td>
                <h2>Email:</h2>
              </td>
              <td>
                <p>{user.email}</p>
              </td>
            </tr>
          </tbody>
        </table>

        <SearchBar />
      </div>
    )
  }
}

export default Profile