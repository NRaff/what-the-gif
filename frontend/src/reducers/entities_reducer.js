import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import GameReducer from "./game_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  games: GameReducer
})

export default EntitiesReducer;
