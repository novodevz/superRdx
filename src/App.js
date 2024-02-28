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
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <div className="row content">
          <div className="col-lg-2 sidenav left-sidenav">
            <SideNav />
          </div>
          <div className="col-lg-8 text-left maincont">
            <TopRow />
            <Outlet />
          </div>
          <div className="col-lg-2 sidenav right-sidenav">
            <Ads />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
