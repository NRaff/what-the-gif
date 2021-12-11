import { connect } from "react-redux";
import Splash from "./splash";
import { receiveCurrentUser } from "../../actions/session_actions";
import { clearUsers } from "../../actions/user_actions";
import { resetGame } from "../../actions/ui_actions";
import { removeCard } from '../../actions/cards/played_card_actions'


const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated
})


const mDTP = dispatch => ({
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  clearUsers: () => dispatch(clearUsers()),
  resetGame: () => dispatch(resetGame()),
  removeCard: () => dispatch(removeCard())
})

export default connect(mSTP, mDTP)(Splash)