import { receiveAllCategories, RECEIVE_ALL_CATEGORIES } from '../actions/deck_category_actions'
import { receiveGame } from '../actions/game_actions'
import { receiveCards, RECEIVE_ALL_CARDS } from '../actions/game_deck_actions'
import { nextRound, NEXT_ROUND, startGame, updateCategory, UPDATE_CATEGORY } from '../actions/ui_actions'
import { receiveUsers } from '../actions/user_actions'
import { searchGifs } from './game_setup'
import { setupCards } from './game_setup'
import GameManager from '../util/game_socket_util'
export const GAME_STARTED = 'GAME_STARTED'
export const GAME_OVER = 'GAME_OVER'
export const RESET_GAME = 'RESET_GAME'
export const JOINED_GAME = 'JOINED_GAME'


const GameDispatch = (action, dispatch) => {
  const manager = GameManager(action.gameCode, dispatch)
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      dispatch(receiveAllCategories(action.categories))
      break;
    case RECEIVE_ALL_CARDS:
      dispatch(receiveCards(action.cards))
      break;
    case GAME_STARTED:
      dispatch(startGame())
      break;
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
      break;
    case NEXT_ROUND:
      debugger
      dispatch(nextRound())
      break;
    case UPDATE_CATEGORY:
      dispatch(updateCategory())
      break;
    default:
      break;
  }
}

export default GameDispatch;