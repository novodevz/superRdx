import React from "react";
import { useSelector } from "react-redux";
import { slctCurrentRoute } from "./navSlice";
import MainNav from "./MainNav";
import DepNav from "./DepNav";
import CatNav from "./CatNav";
import { useParams } from "react-router-dom";

const SideNav = () => {
  const currentRoute = useSelector(slctCurrentRoute);
  const { dep, cat } = useParams();
  // Conditional rendering based on the current route
  if (currentRoute === "/") {
    // Render sidebar for the home route
    return (
      <div>
        <MainNav />
      </div>
    );
  } else if (currentRoute === "/shop") {
    // Render sidebar for the shop route
    return (
      <div>
        <DepNav />
      </div>
    );
  } else if (
    currentRoute === `/shop/${dep}` ||
    currentRoute === `/shop/${dep}/${cat}`
  ) {
    // Render sidebar for the shop route
    return (
      <div>
        <CatNav />
      </div>
    );
  } else {
    return (
      <div>
        <MainNav />
      </div>
    );
  }
};

export default SideNav;
