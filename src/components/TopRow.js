import React from "react";
import Grit from "./Grit";
import Cart from "../features/cart/Cart";
import LoginTimer from "./LoginTimer";
import { useSelector } from "react-redux";
import { slctCartProdCnt } from "../features/cart/cartSlice";

const TopRow = () => {
  const cartProdCount = useSelector(slctCartProdCnt);
  return (
    <div
      className="container toprowcnt"
      style={{
        position: "fixed", // Fix the position on the screen
        top: 70, // Position it at the top
        width: "66%", // Make it span the full width
        backgroundColor: "rgba(241, 219, 91, 0.7)", // Example background color
        zIndex: 1000, // Ensure it appears above other content
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        message: <Grit />
      </div>
      <div>
        <Cart count={cartProdCount} />
      </div>
      <div>
        <LoginTimer />
      </div>
    </div>
  );
};

export default TopRow;
