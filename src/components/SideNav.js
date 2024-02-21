import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SideNav = () => {
  return (
    <div>
      <div className="col-sm-2 sidenav">
        {" "}
        {/* Changed class to className */}
        <p>
          {/* Replace <a> with <Link> */}
          <Link to="/">Link</Link>
        </p>
        <p>
          {/* Replace <a> with <Link> */}
          <Link to="/">Link</Link>
        </p>
        <p>
          {/* Replace <a> with <Link> */}
          <Link to="/">Link</Link>
        </p>
      </div>
    </div>
  );
};

export default SideNav;
