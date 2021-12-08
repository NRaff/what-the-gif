import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import GameReducer from "./game_reducer";
import cards from "./cards_reducer";
<<<<<<< HEAD
import CategoriesReducer from "./categories_reducer"
=======
import SearchedGifsReducer from "./searched_gifs_reducer"
>>>>>>> f7d22def4469c34c48bf9f842c02df2f434ce8d3

const EntitiesReducer = combineReducers({
  users: UserReducer,
  games: GameReducer,
  cards: cards,
<<<<<<< HEAD
  categories: CategoriesReducer
=======
  searchgifs: SearchedGifsReducer
>>>>>>> f7d22def4469c34c48bf9f842c02df2f434ce8d3
})

export default EntitiesReducer;
