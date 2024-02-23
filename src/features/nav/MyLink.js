import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentRoute } from "./navSlice";

const MyLink = ({ to, children, ...rest }) => {
  const dispatch = useDispatch();

  // Get the current route from the Redux store
  // const currentRoute = useSelector((state) => state.nav.currentRoute);

  // Function to handle click on the Link component
  const handleClick = () => {
    // Dispatch the setCurrentRoute action with the new route
    dispatch(setCurrentRoute(to));
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      // className={to === currentRoute ? "active" : ""}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default MyLink;
