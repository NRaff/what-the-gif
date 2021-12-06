import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mSTP = state => ({
  user: {
    email: '',
    password: ''
  },
  errors: state.errors.session,
  formType: 'Login'
})


const mDTP = dispatch => ({
  action: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)