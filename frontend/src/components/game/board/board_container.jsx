import { connect } from "react-redux";
import Board from "./board";
import { fetchUser } from "../../../actions/user_actions";
import { fetchCards } from "../../../actions/game_deck_actions";
import { findByCode } from "../../component_utils/methods";

const mSTP = (state, ownProps) => {
  const games = Object.values(state.entities.games)
  const code = ownProps.match.params.gameCode
  // ! review users vs players in board componenet
  return ({
    game: findByCode(games, code),
    gameCode: code,
    players: Object.values(state.entities.users),
    currentUser: state.session.user,
    users: Object.values(state.entities.users),
  })
}

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchCards: () => dispatch(fetchCards()),
  dispatch: dispatch
})

export default connect(mSTP, mDTP)(Board)