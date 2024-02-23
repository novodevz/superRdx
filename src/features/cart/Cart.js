import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Link to="/">
        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">
          items count
        </span>
      </Link>
    </div>
  );
};

export default Cart;

{
  /* <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> */
}

// Include Bootstrap Icons CSS file
{
  /* <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"> */
}

{
  /* <span className="bi bi-cart-fill"></span> */
}

// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const Cart = ({ iconStyle, spanStyle, val }) => {
//   return (
//     <div style={{ marginRight: "10px" }}>
//       <Link to="/mycart" style={{ textDecoration: "none" }}>
//         <FontAwesomeIcon icon={faShoppingCart} size="lg" style={iconStyle} />
//       </Link>
//       <span style={spanStyle}>{val}</span>
//     </div>
//   );
// };

// export default Cart;
