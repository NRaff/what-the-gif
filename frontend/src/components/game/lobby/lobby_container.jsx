import { connect } from "react-redux";
import Lobby from "./lobby";
import { fetchUser } from "../../../actions/user_actions";

const mSTP = state => ({
  game: state.entities.games,
  players: Object.values(state.entities.users),
  currentUser: state.session.user
})

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
})

export default connect(mSTP, mDTP)(Lobby)