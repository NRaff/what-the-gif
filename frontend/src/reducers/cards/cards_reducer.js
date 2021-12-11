import { combineReducers } from "redux";
import gameDeck from "./game_deck_reducer";
import playedCardsReducer from "./played_cards_reducer";
import submittedCardsReducer from './submitted_cards_reducer';

const cards = combineReducers({
  gameDeck: gameDeck,
  playedCards: playedCardsReducer,
  submittedCards: submittedCardsReducer
})

export default cards