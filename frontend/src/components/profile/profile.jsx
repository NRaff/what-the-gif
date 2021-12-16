import React from "react";
// import { Link } from 'react-router-dom'
import '../../stylesheets/root.scss'
import SearchBar from "../searchbar/searchbar_container";
class Profile extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser)
  }

  render(){
    const user = this.props.user ? this.props.user : this.props.currentUser
    // console.log(this.props)
    return(
      <div id='profile-module'>
        <h1>USER PROFILE</h1>
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
            {this.props.user ? (this.props.user.favGIF ? (
              <tr id='p-info'>
                <td>
                  <h2>Favorite GIF:</h2>
                </td>
                <td>
                  <img src={user.favGIF} alt="Favorite GIF" />
                </td>
              </tr>
            ) : (null)) : (null)}
          </tbody>
        </table>

        <SearchBar />
      </div>
    )
  }
}

export default Profile