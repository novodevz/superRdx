import React from "react";
// import { Link } from "react-router-dom"; // Import MyLink from react-router-dom
import MyLink from "./MyLink";
import { useSelector, useDispatch } from "react-redux";
import {
  // slctUsername,
  // slctRegister,
  slctLogin,
  logoutRdcr,
} from "../auth/authSlice";

const Nav = () => {
  //   const username = useSelector(slctUsername);
  //   const register = useSelector(slctRegister);
  const login = useSelector(slctLogin);

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-inverse mynav">
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
            {/* Replace <a> with <MyLink> */}
            <MyLink to="/" className="navbar-brand">
              super
            </MyLink>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                {/* Replace <a> with <MyLink> */}
                <MyLink to="/" className="nav-link">
                  Home
                </MyLink>
              </li>
              <li>
                {/* Replace <a> with <MyLink> */}
                <MyLink to="/shop" className="nav-link">
                  shop
                </MyLink>
              </li>
              <li>
                {/* Replace <a> with <MyLink> */}
                <MyLink to="/mycart" className="nav-link">
                  mycart
                </MyLink>
              </li>
              <li>
                {/* Replace <a> with <MyLink> */}
                <MyLink to="/secret" className="nav-link">
                  secret
                </MyLink>
              </li>
              <li>
                {/* Replace <a> with <MyLink> */}
                <MyLink to="/crud" className="nav-link">
                  crud
                </MyLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {login ? (
                <li>
                  {/* Replace <a> with <MyLink> */}
                  <MyLink
                    to="/"
                    className="nav-link"
                    onClick={() => dispatch(logoutRdcr())}
                  >
                    <span className="glyphicon glyphicon-log-out"></span> Logout
                  </MyLink>
                </li>
              ) : (
                <li>
                  {/* Replace <a> with <MyLink> */}
                  <MyLink to="/login" className="nav-link">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </MyLink>
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
