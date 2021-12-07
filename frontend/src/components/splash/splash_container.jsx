import { connect } from "react-redux";
import Splash from "./splash";


const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated
})


const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Splash)