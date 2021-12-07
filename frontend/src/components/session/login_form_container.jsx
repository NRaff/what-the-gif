import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP = state => ({
  user: {
    email: '',
    password: ''
  },
  errors: state.errors.session,
  formType: 'Log In'
})


const mDTP = dispatch => ({
  action: user => dispatch(login(user)),
  clearErrors: errors => dispatch(clearErrors(errors))
})

export default connect(mSTP, mDTP)(SessionForm)