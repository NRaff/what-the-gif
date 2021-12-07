import { connect } from "react-redux";
import Splash from "./splash";


const mSTP = state => ({
  errors: state.errors.session
})


const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Splash)