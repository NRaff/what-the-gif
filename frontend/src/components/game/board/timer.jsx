import React from "react";
import { roundOver, toggleTimeUp } from "../../../actions/ui_actions";
import '../../../stylesheets/root.scss'

const { useEffect, useState } = React;

const Timer = React.memo(function Timer({
  remaining, 
  gameManager,
  gameOwner,
  currentUser,
}) {
  const [showSec, setShowSec] = useState(remaining);
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