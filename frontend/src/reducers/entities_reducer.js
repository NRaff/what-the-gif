import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import GameReducer from "./game_reducer";
import cards from "./cards/cards_reducer";
import SearchedGifsReducer from "./searched_gifs_reducer"
import categories from "./categories/categories_reducer";
import roundsReducer from "./rounds_reducer";

const EntitiesReducer = combineReducers({
  users: UserReducer,
  games: GameReducer,
  rounds: roundsReducer,
  cards: cards,
  categories: categories,
  searchgifs: SearchedGifsReducer,
})

export default EntitiesReducer;
