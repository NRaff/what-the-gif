import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP = state => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  user: {
    displayName: '',
    email: '',
    password: '',
    password2: ''
  }
})


const mDTP = dispatch => ({
  action: user => dispatch(signup(user)),
  clearErrors: errors => dispatch(clearErrors(errors))
})

export default connect(mSTP, mDTP)(SessionForm)