import { connect } from "react-redux";
import Board from "./board";

const mSTP = state => ({
  // players: Object.values(state.game.players)
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Board)