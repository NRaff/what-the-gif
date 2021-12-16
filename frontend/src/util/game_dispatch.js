import { 
  PLAY_CATEGORY, 
  RECEIVE_ALL_CATEGORIES, 
  removeCategory, 
  receiveAllCategories,
  removeAllCategories
} from '../actions/categories/deck_category_actions'
import { receiveGame, removeAllGames } from '../actions/game_actions'
import { 
  RECEIVE_ALL_CARDS,
  receiveCards,
  removeDeltCard,
  removeAllCards
 } from '../actions/cards/game_deck_actions'
import { receivePlayedCategory, removeAllPlayedCategories } from '../actions/categories/played_category_actions'
import { 
  nextRound, 
  NEXT_ROUND, 
  setCurrentGame, 
  startGame, 
  toggleRoundWinnerChosen, 
  toggleShowSubmitted, 
  toggleTimeUp,  
  UPDATE_CATEGORY,
  removeCurrentGame 
} from '../actions/ui_actions'
import { receiveUsers, clearUsers } from '../actions/user_actions'
import { receiveRound, clearRounds } from '../actions/round_actions'
import { fetchHand, receiveNewCard } from '../actions/hand_actions'
import { receiveSubmittedCard, RECEIVE_SUBMITTED_CARD, removeSubmittedCards } from '../actions/cards/played_card_actions'
import { receivePlayedCard, removePlayedCards } from '../actions/cards/played_cards_actions'
export const GAME_STARTED = 'GAME_STARTED'
export const GAME_OVER = 'GAME_OVER'
export const RESET_GAME = 'RESET_GAME'
export const JOINED_GAME = 'JOINED_GAME'
export const DEAL_HAND = 'DEAL_HAND'
export const RECEIVE_ROUND_WINNER = 'RECEIVE_ROUND_WINNER'
export const DEAL_CARD = 'DEAL_CARD'
export const CLEAR_GAME = 'CLEAR_GAME'


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
    case DEAL_CARD:
      dispatch(removeDeltCard(action.card.gifId))
      dispatch(receivePlayedCard(action.card))
      dispatch(receiveNewCard(action))
      break;
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
      dispatch(setCurrentGame(action.game))
      break;
    case NEXT_ROUND:
      dispatch(toggleRoundWinnerChosen())
      dispatch(toggleShowSubmitted())
      dispatch(removeSubmittedCards())
      dispatch(toggleTimeUp())
      dispatch(receiveRound(action.round))
      dispatch(nextRound(action.round.id))
      break;
    case UPDATE_CATEGORY:
      dispatch(receiveRound(action.round))
      break;
    case PLAY_CATEGORY:
      dispatch(receivePlayedCategory(action.category))
      dispatch(removeCategory(action.category))
      break;
    case RECEIVE_SUBMITTED_CARD:
      dispatch(receiveSubmittedCard(action))
      break;
    case RECEIVE_ROUND_WINNER:
      dispatch(receiveRound(action.round))
      dispatch(receiveGame(action.game))
      dispatch(toggleRoundWinnerChosen())
      break;
    case CLEAR_GAME:
      dispatch(removeCurrentGame())
      dispatch(removeSubmittedCards())
      dispatch(removeAllCards())
      dispatch(removeAllCategories())
      dispatch(removeAllPlayedCategories())
      dispatch(clearRounds())
      dispatch(removeAllGames())
      dispatch(clearUsers())
      dispatch(removePlayedCards())
    default:
      dispatch(action)
      break;
  }
}

export default GameDispatch;