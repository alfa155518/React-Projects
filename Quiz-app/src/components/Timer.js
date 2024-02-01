import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const sec = secondRemaining % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div
      className="
  timer">
      {mins < 10 && "0"}
      {mins}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
