import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
import Ads from "./components/Ads";
import Grit from "./components/Grit";
import LoginTimer from "./components/LoginTimer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid text-center">
        <div className="row content">
          <SideNav />
          <div className="col-sm-8 text-left maincont">
            <div className="row mytopraw">
              <div className="col-sm-8">
                <Grit />
              </div>
              <div className="col-sm-2">cart</div>
              <div className="col-sm-2">
                <LoginTimer />
              </div>
            </div>
            <Outlet />
          </div>
          <Ads />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
