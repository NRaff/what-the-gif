import GameForm from "./game_form";
import { connect } from "react-redux";
import {createGame} from "../../actions/game_actions"

  // State will be set in the form
const mSTP = state => ({
  // Errors name may be different
  errors: state.errors.game,
  currentUser: state.session.user.id
})

// Need to have functions to createGame, maybe need delete game at some point
const mDTP = dispatch => ({
  createGame: game => dispatch(createGame(game))
})

export default connect(mSTP, mDTP)(GameForm)