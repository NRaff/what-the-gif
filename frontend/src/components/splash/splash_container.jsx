import { connect } from "react-redux";
import Splash from "./splash";
import { receiveCurrentUser } from "../../actions/session_actions";


const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated,
  currentUser: state.session.user.id
})


const mDTP = dispatch => ({
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
})

export default connect(mSTP, mDTP)(Splash)