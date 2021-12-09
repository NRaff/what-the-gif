import { connect } from "react-redux";
import Board from "./board";
import { fetchUser } from "../../../actions/user_actions";
import { fetchCards } from "../../../actions/game_deck_actions";

const mSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.gameCode],
  users: Object.values(state.entities.users),
  players: state.entities.games[ownProps.match.params.gameCode],
  currentUser: state.session.user,
  gameCode: ownProps.match.params.gameCode,
})

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchCards: () => dispatch(fetchCards())
})

export default connect(mSTP, mDTP)(Board)