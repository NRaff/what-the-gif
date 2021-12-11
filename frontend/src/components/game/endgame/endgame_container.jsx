import { connect } from "react-redux";
import Endgame from "./endgame";
import { fetchUser } from "../../../actions/user_actions";
import { fetchCards } from "../../../actions/cards/game_deck_actions";

const mSTP = (state, ownProps) => { 
  return ({
    game: Object.values(state.entities.games),
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

export default connect(mSTP, mDTP)(Endgame)