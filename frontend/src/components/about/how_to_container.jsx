import { connect } from "react-redux";
import HowToPlay from "./how_to";

const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated,
  currentUser: state.session.user
})


const mDTP = dispatch => ({
})

export default connect(mSTP, mDTP)(HowToPlay)
