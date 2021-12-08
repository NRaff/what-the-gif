import { connect } from "react-redux";
import Hand from "./hand";
import { fetchUser } from "../../actions/user_actions";


const mSTP = state => ({

})

const mDTP = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))

})

export default connect(mSTP, mDTP)(Hand)