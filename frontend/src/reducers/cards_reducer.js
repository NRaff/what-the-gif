import { combineReducers } from "redux";
import gameDeck from "./game_deck_reducer";

const cards = combineReducers({
  gameDeck: gameDeck
})

export default cards