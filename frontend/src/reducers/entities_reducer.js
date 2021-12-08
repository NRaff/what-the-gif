import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import GameReducer from "./game_reducer";
import cards from "./cards_reducer";
import SearchedGifsReducer from "./searched_gifs_reducer"
import categories from "./categories_reducer";

const EntitiesReducer = combineReducers({
  users: UserReducer,
  games: GameReducer,
  cards: cards,
  searchgifs: SearchedGifsReducer,
  categories: categories
})

export default EntitiesReducer;
