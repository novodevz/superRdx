import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAsc, rememberRdcr } from "./authSlice";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    dispatch(
      loginAsc({ username: username, password: password, url: "login" })
    );
    dispatch(rememberRdcr({ remember }));
    clearFormFields(); // Clear form fields after dispatching login action
  };

  const clearFormFields = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  return (
    <div style={{ maxWidth: "800px" }}>
      <h1>Login</h1>
      <br />
      <div>
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

          <div className="">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkboxInp"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="checkboxInp">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" style={{ color: "blue" }}>
              Forgot password?
            </Link>
            <hr />
            <Link to="/register" style={{ color: "blue" }}>
              Don't have an account? Register here.
            </Link>
          </div>
          <br />
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
