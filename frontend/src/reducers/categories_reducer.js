import { combineReducers } from "redux";
import DeckCategoryReducer from "./deck_categories_reducer";
import playedCategory from "./played_category_reducer";

const categories = combineReducers({
  deckCategory: DeckCategoryReducer,
  playedCategory: playedCategory
})

export default categories;