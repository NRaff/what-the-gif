import React from "react";
import '../../../stylesheets/root.scss'

const { useEffect, useState } = React;

const Timer = React.memo(function Timer({
  remaining, 
  roundOver, 
  resetRound, 
  nextRound, 
  nextCategory,
  removeCard,
  submit
}) {
  const [showSec, setShowSec] = useState(remaining);
  useEffect(() => setShowSec(remaining), [remaining]);
  useEffect(() => {
    const timer =
      showSec > 0 &&
      setTimeout(() => setShowSec(showSec - 1), 1000);
    if (showSec === 0) {
      setTimeout(()=> {
        roundOver()
        setShowSec(remaining)
        nextRound()
        nextCategory()
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