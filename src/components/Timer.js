import React, { useState, useEffect } from "react";

const Timer = ({ t }) => {
  const [timeRemaining, setTimeRemaining] = useState(t);

  useEffect(() => {
    // Update time remaining every second
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [t]);

  // Function to format time in HH:MM:SS format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <div>
        <span>{formatTime(timeRemaining)}</span>
      </div>
    </div>
  );
};

export default Timer;
