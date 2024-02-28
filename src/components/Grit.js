import React from "react";
import { useSelector } from "react-redux";
import {
  slctUsername,
  // slctRegister,
  // slctLogin,
} from "../features/auth/authSlice";

const Grit = () => {
  const username = useSelector(slctUsername);
  // const register = useSelector(slctRegister);
  // const login = useSelector(slctLogin);

  return (
    <div>
      <strong>{username && <span>welcom {username}</span>}</strong>
    </div>
  );
};

export default Grit;
