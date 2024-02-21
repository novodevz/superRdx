import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
import Ads from "./components/Ads";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid text-center">
        <div className="row content">
          <SideNav />
          <div className="col-sm-8 text-left">
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
