import React, { useEffect } from "react";
import { slctLogin } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Timer from "./Timer";

const Secret = () => {
  const t = 5000;
  const login = useSelector(slctLogin);
  const nav = useNavigate();
  useEffect(() => {
    if (!login) {
      setTimeout(() => {
        nav("/login");
      }, t);
    }
    // eslint-disable-next-line
  }, []);

  if (login) {
    return (
      <div>
        <h1>secret</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>not authorized!</h1>
          <h1 style={{ marginRight: "10px", color: "black" }}>
            you are routed to login in:
          </h1>
          <h1>
            <Timer t={t / 1000} />
          </h1>
        </div>
      </div>
    );
  }
};

export default Secret;
