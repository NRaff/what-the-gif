import { connect } from "react-redux";
import Board from "./board";
import { fetchUser } from "../../../actions/user_actions";
import { fetchCards } from "../../../actions/game_deck_actions";
import { findByCode } from "../../component_utils/methods";
import { roundOver, resetRound } from "../../../actions/ui_actions";

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
    categories: Object.values(state.entities.categories.deckCategory),
    over: state.ui.roundOver,
    submittedCards: state.entities.cards.submittedCards
  })
}

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchCards: () => dispatch(fetchCards()),
  dispatch: dispatch,
  roundOver: () => dispatch(roundOver()),
  resetRound: () => dispatch(resetRound())
})

export default connect(mSTP, mDTP)(Board)