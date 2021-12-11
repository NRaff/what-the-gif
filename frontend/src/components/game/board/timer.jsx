import React from "react";
import { PLAY_CATEGORY } from "../../../actions/categories/deck_category_actions";
import { NEXT_ROUND, roundOver, UPDATE_CATEGORY } from "../../../actions/ui_actions";
import '../../../stylesheets/root.scss'
import { useDispatch } from "react-redux";

const { useEffect, useState } = React;

const Timer = React.memo(function Timer({
  remaining, 
  // roundOver, 
  resetRound, 
  nextRound, 
  nextCategory,
  removeCard,
  submit,
  gameManager,
  roundNum,
  category
}) {
  const [showSec, setShowSec] = useState(remaining);
  const dispatch = useDispatch();
  const timerEnds = () => {
    gameManager.sendToGame({ type: UPDATE_CATEGORY })
    const newRoundNum = roundNum + 1
    gameManager.sendToGame({ type: NEXT_ROUND, roundNum: newRoundNum })
    const payload = {
      type: PLAY_CATEGORY,
      category
    }
    gameManager.sendToGame(payload)
    dispatch(roundOver())
    setShowSec(remaining)
    removeCard(submit)
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