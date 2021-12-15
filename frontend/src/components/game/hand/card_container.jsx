import { connect } from "react-redux";
import Card from "./card"
import { fetchUser } from "../../../actions/user_actions";
import { fetchHand } from "../../../actions/hand_actions";
import SubmittedCard from "./submitted_card";

const mSTP = state => {
  return{
    currentUser: state.session.user,
    currentPlayer: state.entities.users[state.session.user.id],
    currentRound: state.entities.rounds[state.ui.roundNum],
    currentGame: state.entities.games[state.ui.currentGame],
    roundWinnerChosen: state.ui.roundWinnerChosen,
    players: state.entities.users,
    submittedGifs: state.entities.cards.submittedCards,
    users: Object.values(state.entities.users),
  };
}

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchHand: (hand) => dispatch(fetchHand(hand))
})

export const SubmittedCardContainer = connect(mSTP,mDTP)(SubmittedCard)
export const HandCardContainer = connect(mSTP, mDTP)(Card)