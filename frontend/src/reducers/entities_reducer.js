import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import GameReducer from "./game_reducer";
import cards from "./cards_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  games: GameReducer,
  cards: cards
})

export default EntitiesReducer;
