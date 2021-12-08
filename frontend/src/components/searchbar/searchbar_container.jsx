import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { fetchGifs, clearGifs } from "../../actions/searched_gifs_actions"

const mSTP = state => ({
  errors: state.errors.session,
  results: Object.values(state.entities.searchgifs)
})


const mDTP = dispatch => ({
  fetchGifs: (searchTerm, num) => dispatch(fetchGifs(searchTerm, num)),
  clearGifs: () => dispatch(clearGifs())
})

export default connect(mSTP, mDTP)(SearchBar)