import React from "react";
import MyLink from "./MyLink";

const DepNav = () => {
  return (
    <div>
      <p>
        <MyLink to="/shop/wine">wine</MyLink>
      </p>
      <p>
        <MyLink to="/shop/bread">bread</MyLink>
      </p>
      <p>
        <MyLink to="/shop/fresh">fresh</MyLink>
      </p>
    </div>
  );
};

export default DepNav;
