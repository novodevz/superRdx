import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Ads from "./components/Ads";
import Nav from "./features/nav/Nav";
import SideNav from "./features/nav/SideNav";
import TopRow from "./components/TopRow";

function App() {
  return (
    <div className="App container-fluid" style={{ paddingTop: "55px" }}>
      <div className="row">
        <Nav />
        <TopRow />
      </div>
      <div className="row" style={{ paddingTop: "55px" }}>
        <div className="col-md-2 sidenav">
          <SideNav />
        </div>
        <div className="col-md-8 cont">
          <Outlet />
        </div>
        <div className="col-md-2 ads">
          <Ads />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
