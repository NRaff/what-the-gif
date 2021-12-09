import { connect } from "react-redux";
import Hand from "./hand";
import { fetchHand } from "../../../actions/hand_actions";
import { fetchUser } from "../../../actions/user_actions";


const mSTP = state => {
  return{
    currentUser: state.session.user,
    users: Object.values(state.entities.users)
  };
}

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchHand: (hand) => dispatch(fetchHand(hand))
})

export default connect(mSTP, mDTP)(Hand)