import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Ads from "./components/Ads";
import Nav from "./features/nav/Nav";
import SideNav from "./features/nav/SideNav";

import TopRow from "./components/TopRow";
import TestDiv from "./components/TestDiv";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row content">
        <Nav />
        <TopRow />
        <div className="col-lg-2 sidenav left-sidenav">
          <SideNav />
        </div>
        <div className="col-lg-8 text-left maincont">
          <Outlet />
        </div>
        <div className="col-lg-2 sidenav right-sidenav">
          <Ads />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
