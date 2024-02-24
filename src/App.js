import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Ads from "./components/Ads";
import Grit from "./components/Grit";
import LoginTimer from "./components/LoginTimer";
import Cart from "./features/cart/Cart";
import Nav from "./features/nav/Nav";
import SideNav from "./features/nav/SideNav";
import { useSelector } from "react-redux";
import { slctCartProdCnt } from "./features/cart/cartSlice";
function App() {
  const cartProdCount = useSelector(slctCartProdCnt);
  return (
    <div className="App">
      <Nav />
      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav sideNavDiv">
            <SideNav />
          </div>
          <div className="col-sm-8 text-left maincont">
            <div className="row mytopraw">
              <div className="col-sm-8">
                <Grit />
              </div>
              <div className="col-sm-2">
                <Cart count={cartProdCount} />
              </div>
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
