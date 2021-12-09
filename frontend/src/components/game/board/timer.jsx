import React from "react";
import '../../../stylesheets/root.scss'

const { useEffect, useState } = React;

const Timer = React.memo(function Timer({remaining}) {
  const [showSec, setShowSec] = useState(remaining);
  useEffect(() => setShowSec(remaining), [remaining]);
  useEffect(() => {
    const timer =
      showSec > 0 &&
      setTimeout(() => setShowSec(showSec - 1), 1000);
    if (showSec === 0) {
      return null;
    }
    return () => clearInterval(timer);
  }, [showSec]);
  return <span>{showSec}</span>;
});

export default Timer