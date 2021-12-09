import { connect } from "react-redux";
import Lobby from "./lobby";
import { fetchUser } from "../../../actions/user_actions";
import { joinGame } from "../../../actions/game_actions";

const mSTP = (state, ownProps) => ({
  game: state.entities.games[ownProps.match.params.gameCode],
  players: Object.values(state.entities.users),
  currentUser: state.session.user,
  gameCode: ownProps.match.params.gameCode
})

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  joinGame: game => dispatch(joinGame(game))
})

export default connect(mSTP, mDTP)(Lobby)