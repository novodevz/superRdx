import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
import MyLink from "./MyLink";

const MainNav = () => {
  return (
    <div>
      <h3>main nav</h3> {/* Changed class to className */}
      <p>
        {/* Replace <a> with <Link> */}
        <MyLink to="/info">info</MyLink>
      </p>
    </div>
  );
};

export default MainNav;
