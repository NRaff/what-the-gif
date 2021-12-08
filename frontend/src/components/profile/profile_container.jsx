import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state, ownProps)  => ({
  errors: state.errors.user,
  auth: state.session.isAuthenticated,
  currentUser: state.session.user,
  user: state.entities.users[ownProps.match.params.userId]
})


const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(mSTP, mDTP)(Profile)