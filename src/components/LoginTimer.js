import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  slctLoginTimeStamp,
  slctTTL,
  logoutRdcr,
} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginTimer = () => {
  const nav = useNavigate();
  const dsp = useDispatch();

  const tokenTimeStamp = useSelector(slctLoginTimeStamp);
  const ttl = useSelector(slctTTL);

  const [timeRemaining, setTimeRemaining] = useState(ttl);
  // Update time remaining when tokenTimeStamp changes
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          // Dispatch logout action asynchronously when timer reaches zero
          setTimeout(() => {
            dsp(logoutRdcr());
            nav("/login");
          });
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setTimeRemaining(ttl);
    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [tokenTimeStamp]);

  // Function to format time in HH:MM:SS format
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  if (timeRemaining === 0) {
    return (
      <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
    );
  }
  return (
    <div>
      <div>
        login time: <span>{formatTime(timeRemaining)}</span>
      </div>
    </div>
  );
};

export default LoginTimer;
