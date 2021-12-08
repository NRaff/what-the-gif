import { connect } from "react-redux";
import SearchBar from "./searchbar";
import { fetchGifs, clearGifs } from "../../actions/searched_gifs_actions"
import { deleteFavGIF, setFavGIF } from "../../actions/user_actions";

const mSTP = state => ({
  errors: state.errors.session,
  results: Object.values(state.entities.searchgifs),
  user: state.session.user
})


const mDTP = dispatch => ({
  fetchGifs: (searchTerm, num) => dispatch(fetchGifs(searchTerm, num)),
  clearGifs: () => dispatch(clearGifs()),
  setFavGIF: gif => dispatch(setFavGIF(gif)),
  deleteFavGIF: user => dispatch(deleteFavGIF(user))
})

export default connect(mSTP, mDTP)(SearchBar)