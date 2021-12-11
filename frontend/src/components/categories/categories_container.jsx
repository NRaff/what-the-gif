import { connect } from "react-redux";
import Categories from "./categories";
import { fetchGifCategories, playCategory } from "../../actions/categories/deck_category_actions";
import { nextRound, updateCategory } from "../../actions/ui_actions";

const mSTP = state => ({
  deckCategories: Object.values(state.entities.categories.deckCategory),
  playedCategories: state.entities.categories.playedCategory,
  currentCat: state.ui.categoryNum
})


const mDTP = dispatch => ({
  fetchCategories: () => dispatch(fetchGifCategories()),
  playCategory: category => dispatch(playCategory(category)),
  nextRound: () => dispatch(nextRound()),
  nextCategory: () => dispatch(updateCategory()),
  dispatch: dispatch
})

export default connect(mSTP, mDTP)(Categories)