import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsc } from "./authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const URL = "register";

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    dispatch(loginAsc({ username: username, password: password, url: URL }));
    clearFormFields(); // Clear form fields after dispatching login action
  };

  const clearFormFields = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1>Register</h1>
      <br />
      <div className="">
        <form onSubmit={handleSubmit}>
          {/* Username input */}
          <div
            className="form-outline mb-4"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <input
              type="text"
              id="usernameInp"
              className="form-control form-control-lg"
              style={{ width: "100%" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="form-label" htmlFor="usernameInp">
              Username
            </label>
          </div>

          {/* Password input */}
          <div
            className="form-outline mb-4"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <input
              type="password"
              id="passwordInp"
              className="form-control form-control-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form-label" htmlFor="passwordInp">
              Password
            </label>
          </div>
          <br />
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
