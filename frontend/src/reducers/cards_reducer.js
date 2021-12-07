import { combineReducers } from "redux";
import gameDeck from "./game_deck_reducer";
import playedCardsReducer from "./played_cards_reducer";

const cards = combineReducers({
  gameDeck: gameDeck,
  playedCards: playedCardsReducer
})

export default cards