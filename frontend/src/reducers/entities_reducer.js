import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import GameReducer from "./game_reducer";
import cards from "./cards_reducer";

const EntitiesReducer = combineReducers({
  users: UserReducer,
  games: GameReducer,
  cards: cards
})

export default EntitiesReducer;
