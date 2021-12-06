import { connect } from "react-redux";
import { joinGame } from "../../actions/game_actions"
import JoinForm from "./join_form";

const mSTP = state => ({
  errors: state.errors.game,
  game: state.entities.game
  // Might need something here referencin the game key 
})

const mDTP = dispatch => ({
  joinGame: game => dispatch(joinGame(game))
})

export default connect(mSTP, mDTP)(JoinForm)