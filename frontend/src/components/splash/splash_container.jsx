import { connect } from "react-redux";
import Splash from "./splash";
import { receiveCurrentUser } from "../../actions/session_actions";
import { ClearDispatch } from "../../actions/clear_actions";

const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated
})


const mDTP = dispatch => ({
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  clearAll: () => dispatch(ClearDispatch())
})

export default connect(mSTP, mDTP)(Splash)