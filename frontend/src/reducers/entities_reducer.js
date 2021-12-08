import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import GameReducer from "./game_reducer";
import cards from "./cards_reducer";
import CategoriesReducer from "./categories_reducer"

const EntitiesReducer = combineReducers({
  users: UserReducer,
  games: GameReducer,
  cards: cards,
  categories: CategoriesReducer
})

export default EntitiesReducer;
