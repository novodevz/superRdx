import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useSelector, useDispatch } from "react-redux";
import {
  slctUsername,
  slctRegister,
  slctLogin,
  logoutRdcr,
} from "../features/auth/authSlice";

const Nav = () => {
  const username = useSelector(slctUsername);
  const register = useSelector(slctRegister);
  const login = useSelector(slctLogin);

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            {/* Replace <a> with <Link> */}
            <Link to="/" className="navbar-brand">
              super
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                {/* Replace <a> with <Link> */}
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                {/* Replace <a> with <Link> */}
                <Link to="/shop" className="nav-link">
                  shop
                </Link>
              </li>
              <li>
                {/* Replace <a> with <Link> */}
                <Link to="/mycart" className="nav-link">
                  mycart
                </Link>
              </li>
              <li>
                {/* Replace <a> with <Link> */}
                <Link to="/secret" className="nav-link">
                  secret
                </Link>
              </li>
              <li>
                {/* Replace <a> with <Link> */}
                <Link to="/crud" className="nav-link">
                  crud
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {login ? (
                <li>
                  {/* Replace <a> with <Link> */}
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => dispatch(logoutRdcr())}
                  >
                    <span className="glyphicon glyphicon-log-out"></span> Logout
                  </Link>
                </li>
              ) : (
                <li>
                  {/* Replace <a> with <Link> */}
                  <Link to="/login" className="nav-link">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
