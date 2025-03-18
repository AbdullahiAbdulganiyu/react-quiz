import { useEffect } from "react";

function Timer({ dispatch, secondsremaining }) {
  return (
    <div className="timer">
      {useEffect(
        function () {
          setInterval(function () {
            dispatch({ type: "tick" });
          }, 1000);
        },
        [dispatch]
      )}
    </div>
  );
}

export default Timer;
