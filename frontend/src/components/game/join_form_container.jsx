import { connect } from "react-redux";
import { joinGame } from "../../actions/game_actions"
import JoinForm from "./join_form";

const mSTP = state => ({
  errors: state.errors.game,
  currentUser: state.session.user.id,
  games: Object.values(state.entities.games)
})

const mDTP = dispatch => ({
  joinGame: game => dispatch(joinGame(game)),
  dispatch: dispatch
})

export default connect(mSTP, mDTP)(JoinForm)