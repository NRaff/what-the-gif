import { receiveAllCategories, RECEIVE_ALL_CATEGORIES } from '../actions/deck_category_actions'
import { receiveGame } from '../actions/game_actions'
import { receiveCards, RECEIVE_ALL_CARDS } from '../actions/game_deck_actions'
import { startGame } from '../actions/ui_actions'
import { receiveUsers } from '../actions/user_actions'
export const GAME_STARTED = 'GAME_STARTED'
export const GAME_OVER = 'GAME_OVER'
export const RESET_GAME = 'RESET_GAME'
export const JOINED_GAME = 'JOINED_GAME'

const GameDispatch = (action, dispatch) => {
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      dispatch(receiveAllCategories(action.categories))
    case RECEIVE_ALL_CARDS:
      dispatch(receiveCards(action.cards))
    case GAME_STARTED:
      dispatch(startGame())
      break;
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
    default:
      break;
  }
}

export default GameDispatch;