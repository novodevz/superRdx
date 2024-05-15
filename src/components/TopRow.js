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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        width: "100%",
        position: "fixed",
        zIndex: 1000,
        height: "40px",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        {/* Adjust margin as needed */}
        message: <Grit />
      </div>
      <div style={{ marginRight: "20px" }}>
        {/* Adjust margin as needed */}
        <Cart count={cartProdCount} />
      </div>
      <div>
        {/* No need for margin as it's the last item */}
        <LoginTimer />
      </div>
    </div>
  );
};

export default TopRow;
