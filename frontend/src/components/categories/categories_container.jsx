import { connect } from "react-redux";
import Categories from "./categories";
import { fetchGifCategories, playCategory } from "../../actions/deck_category_actions";

const mSTP = state => ({
  deckCategories: Object.values(state.entities.categories.deckCategory),
  playedCategories: state.entities.categories.playedCategory
})


const mDTP = dispatch => ({
  fetchCategories: () => dispatch(fetchGifCategories()),
  playCategory: category => dispatch(playCategory(category))
})

export default connect(mSTP, mDTP)(Categories)