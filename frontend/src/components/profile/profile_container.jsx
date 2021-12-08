import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUser } from "../../actions/user_actions";

const mSTP = state => ({
  errors: state.errors.user,
  auth: state.session.isAuthenticated,
  currentUser: state.session.user
})


const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(mSTP, mDTP)(Profile)