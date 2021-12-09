import { connect } from "react-redux";
import Hand from "./hand";
import { fetchHand } from "../../../actions/hand_actions";
import { fetchUser } from "../../../actions/user_actions";
import { fetchGif, myGif } from "../../../actions/searched_gifs_actions";
import { fetchCards } from "../../../actions/game_deck_actions";

const mSTP = state => {
  return{
    currentUser: state.session.user,
    users: state.entities.users,
    results: Object.values(state.entities.searchgifs),
    gameDeck: Object.values(state.entities.cards.gameDeck),
    playedCards: Object.values(state.entities.cards.playedCards)
  };
}

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchHand: (hand) => dispatch(fetchHand(hand)),
  fetchGif: (gifId) => dispatch(fetchGif(gifId)),
  myGif: (gifId) => dispatch(myGif(gifId)),
  fetchCards: () => dispatch(fetchCards())
})

export default connect(mSTP, mDTP)(Hand)