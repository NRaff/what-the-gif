import { connect } from "react-redux";
import Splash from "./splash";
import { receiveCurrentUser } from "../../actions/session_actions";
import { clearUsers } from "../../actions/user_actions";
import { resetGame, removeCurrentGame, resetAllUI } from "../../actions/ui_actions";
import { removeCard, removeSubmittedCards } from '../../actions/cards/played_card_actions'
import { removePlayedCards } from '../../actions/cards/played_cards_actions'
import { removeAllCards } from "../../actions/cards/game_deck_actions";
import { removeAllCategories } from "../../actions/categories/deck_category_actions";
import { removeAllPlayedCategories } from "../../actions/categories/played_category_actions";
import { clearRounds } from "../../actions/round_actions";
import { removeAllGames } from "../../actions/game_actions";


const mSTP = state => ({
  errors: state.errors.session,
  auth: state.session.isAuthenticated
})


const mDTP = dispatch => ({
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
  clearUsers: () => dispatch(clearUsers()),
  resetGame: () => dispatch(resetGame()),
  removeCard: () => dispatch(removeCard()),
  removeCurrentGame: () => dispatch(removeCurrentGame()),
  removeSubmittedCards: () => dispatch(removeSubmittedCards()),
  removePlayedCards: () => dispatch(removePlayedCards()),
  removeAllCards: () => dispatch(removeAllCards()),
  removeAllCategories: () => dispatch(removeAllCategories()),
  removeAllPlayedCategories: () => dispatch(removeAllPlayedCategories()),
  clearRounds: () => dispatch(clearRounds()),
  removeAllGames: () => dispatch(removeAllGames()),
  resetAllUI: () => dispatch(resetAllUI())
})

export default connect(mSTP, mDTP)(Splash)