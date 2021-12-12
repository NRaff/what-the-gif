import { 
  PLAY_CATEGORY, 
  RECEIVE_ALL_CATEGORIES, 
  removeCategory, 
  receiveAllCategories
} from '../actions/categories/deck_category_actions'
import { receiveGame } from '../actions/game_actions'
import { 
  RECEIVE_ALL_CARDS,
  receiveCards
 } from '../actions/cards/game_deck_actions'
import { receivePlayedCategory } from '../actions/categories/played_category_actions'
import { 
  nextRound, 
  NEXT_ROUND, 
  setCurrentGame, 
  startGame, 
  updateCategory, 
  UPDATE_CATEGORY 
} from '../actions/ui_actions'
import { receiveUsers } from '../actions/user_actions'
import { receiveRound } from '../actions/round_actions'
import { fetchHand } from '../actions/hand_actions'
import { receiveSubmittedCard, RECEIVE_SUBMITTED_CARD } from '../actions/cards/played_card_actions'
export const GAME_STARTED = 'GAME_STARTED'
export const GAME_OVER = 'GAME_OVER'
export const RESET_GAME = 'RESET_GAME'
export const JOINED_GAME = 'JOINED_GAME'
export const DEAL_HAND = 'DEAL_HAND'


const GameDispatch = (action, dispatch) => {
  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      dispatch(receiveAllCategories(action.categories))
      break;
    case RECEIVE_ALL_CARDS:
      dispatch(receiveCards(action.cards))
      break;
    case GAME_STARTED:
      dispatch(startGame())
      dispatch(receiveRound(action.round))
      break;
    case DEAL_HAND:
      dispatch(fetchHand(action.payload))
      break;
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
      dispatch(setCurrentGame(action.game))
      break;
    case NEXT_ROUND:
      dispatch(nextRound(action.roundNum))
      break;
    case UPDATE_CATEGORY:
      dispatch(updateCategory())
      break;
    case PLAY_CATEGORY:
      dispatch(receivePlayedCategory(action.category))
      dispatch(removeCategory(action.category))
      break;
    case RECEIVE_SUBMITTED_CARD:
      dispatch(receiveSubmittedCard(action))
      break;
    default:
      dispatch(action)
      break;
  }
}

export default GameDispatch;