import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = state => ({
  errors: state.errors.user,
  auth: state.session.isAuthenticated,
  currentUser: state.session.user
})


const mDTP = dispatch => ({
  // fetchUser: (userId) => dispatch(fetchUser)
})

export default connect(mSTP, mDTP)(Profile)