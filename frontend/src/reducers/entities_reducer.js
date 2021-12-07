import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import GameReducer from "./game_reducer";

const EntitiesReducer = combineReducers({
  users: UserReducer,
  games: GameReducer
})

export default EntitiesReducer;
