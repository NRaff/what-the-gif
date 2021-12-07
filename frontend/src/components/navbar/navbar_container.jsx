import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";


const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated,
  currentUser: state.session.user
})


const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar)