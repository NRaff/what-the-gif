import React from "react";
import { PLAY_CATEGORY } from "../../../actions/deck_category_actions";
import { NEXT_ROUND, UPDATE_CATEGORY } from "../../../actions/ui_actions";
import '../../../stylesheets/root.scss'

const { useEffect, useState } = React;

const Timer = React.memo(function Timer({
  remaining, 
  roundOver, 
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
  // const manager = manager ? manager
  useEffect(() => setShowSec(remaining), [remaining]);
  useEffect(() => {
    const timer =
      showSec > 0 &&
      setTimeout(() => setShowSec(showSec - 1), 1000);
    if (showSec === 0) {
      setTimeout(()=> {
        gameManager.sendToGame({type: UPDATE_CATEGORY})
        const newRoundNum = roundNum + 1
        gameManager.sendToGame({ type: NEXT_ROUND, roundNum: newRoundNum })
        const payload = {
          type: PLAY_CATEGORY,
          category
        }
        gameManager.sendToGame(payload)
        roundOver() // send game dispatch
        setShowSec(remaining)
        // nextRound() // send to game dispatch with next round
        // nextCategory() // send to game dispatch
        removeCard(submit)
      }, 1000)
      
    }
    return () => {
      clearInterval(timer)
    };
  }, [roundOver, showSec]);
  return <span>{showSec}</span>;
});

export default Timer