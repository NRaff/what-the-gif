import { removeAllCards } from "./cards/game_deck_actions"
import { removeAllCategories } from "./categories/deck_category_actions"
import { removeAllGames } from "./game_actions"
import { clearRounds } from "./round_actions"
import { clearUsers } from "./user_actions"
import { removePlayedCards } from "./cards/played_cards_actions"
import { removeSubmittedCards } from "./cards/played_card_actions"
import { removeAllPlayedCategories } from "./categories/played_category_actions"
import { resetGame, resetAllUI, removeCurrentGame } from "./ui_actions"

export const ClearDispatch = () => dispatch => {
  dispatch(removeCurrentGame())
  dispatch(removeSubmittedCards())
  dispatch(removeAllCards())
  dispatch(removeAllCategories())
  dispatch(removeAllPlayedCategories())
  dispatch(clearRounds())
  dispatch(removeAllGames())
  dispatch(clearUsers())
  dispatch(removePlayedCards())
  dispatch(resetGame())
  dispatch(resetAllUI())
}
