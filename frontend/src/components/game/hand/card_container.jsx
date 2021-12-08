import { connect } from "react-redux";
import Card from "./card"
import { fetchUser } from "../../actions/user_actions";
import { fetchHand } from "../../../actions/hand_actions";
const mSTP = state => ({

})

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchHand: (hand) => dispatch(fetchHand(hand))

})

export default connect(mSTP, mDTP)(Card)