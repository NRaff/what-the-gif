import { connect } from "react-redux";
import Hand from "./hand";
import { fetchHand } from "../../../actions/hand_actions";
import { fetchUser } from "../../../actions/user_actions";
import { fetchGif, myGif } from "../../../actions/searched_gifs_actions";
import { submitCard, removeCard } from '../../../actions/cards/played_card_actions'

const mSTP = state => {
  return{
    currentUser: state.session.user,
    currentPlayer: state.entities.users[state.session.user.id],
    currentRound: state.entities.rounds[state.ui.roundNum],
    users: Object.values(state.entities.users),
    results: Object.values(state.entities.searchgifs),
    gameDeck: Object.values(state.entities.cards.gameDeck),
    playedCards: state.entities.cards.playedCards,
    roundNum: state.ui.roundNum
  };
}

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchHand: (payload) => dispatch(fetchHand(payload)),
  fetchGif: (gifId) => dispatch(fetchGif(gifId)),
  myGif: (gifId) => dispatch(myGif(gifId)),
  submitCard: (card) => dispatch(submitCard(card)),
  removeCard: (card) => dispatch(removeCard(card))
})

export default connect(mSTP, mDTP)(Hand)