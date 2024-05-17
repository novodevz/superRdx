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
        <div style={{ display: "flex", alignItems: "center" }}>
          <strong style={{ marginRight: "10px", color: "black" }}>
            not authorized! you are routed to login in:
          </strong>
          <strong>
            <Timer t={t / 1000} />
          </strong>
        </div>
      </div>
    );
  }
};

export default Secret;
