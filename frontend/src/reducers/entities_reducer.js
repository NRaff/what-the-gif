import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import GameReducer from "./game_reducer";
import cards from "./cards_reducer";
import SearchedGifsReducer from "./searched_gifs_reducer"

const EntitiesReducer = combineReducers({
  users: UserReducer,
  games: GameReducer,
  cards: cards,
  searchgifs: SearchedGifsReducer
})

export default EntitiesReducer;
