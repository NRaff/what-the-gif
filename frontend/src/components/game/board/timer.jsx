import React from "react";
import { PLAY_CATEGORY } from "../../../actions/categories/deck_category_actions";
import { NEXT_ROUND, roundOver, toggleTimeUp, UPDATE_CATEGORY } from "../../../actions/ui_actions";
import '../../../stylesheets/root.scss'
import { useDispatch } from "react-redux";
// import { manager } from "../../../util/game_socket_util";

const { useEffect, useState } = React;

const Timer = React.memo(function Timer({
  remaining, 
  // roundOver,
  gameManager,
  gameOwner,
  currentUser,
  // resetRound, 
  // nextRound, 
  // nextCategory,
  removeCard,
  submit,
  roundNum,
  category
}) {
  const [showSec, setShowSec] = useState(remaining);
  const dispatch = useDispatch();
  // deprecated function on the timer component
  // const startNextRound = () => {
  //   gameManager.sendToGame({ type: UPDATE_CATEGORY })
  //   const newRoundNum = roundNum + 1
  //   gameManager.sendToGame({ type: NEXT_ROUND, roundNum: newRoundNum })
  //   const payload = {
  //     type: PLAY_CATEGORY,
  //     category
  //   }
  //   gameManager.sendToGame(payload)
  //   dispatch(roundOver())
  //   setShowSec(remaining)
  //   removeCard(submit)
  // }
  const timerEnds = () => {
    if (gameOwner === currentUser) {
      gameManager.sendToGame(toggleTimeUp())
    }
  }
  useEffect(() => setShowSec(remaining), [remaining]);
  useEffect(() => {
    const timer =
      showSec > 0 &&
      setTimeout(() => setShowSec(showSec - 1), 1000);
    if (showSec === 0) {
      setTimeout(timerEnds, 1000)
    }
    return () => {
      clearInterval(timer)
    };
  }, [roundOver, showSec]);
  return <span>{showSec}</span>;
});

export default Timer