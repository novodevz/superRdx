import React from "react";
import Cart from "../cart/Cart";
import {
  addToCartRdcr,
  rmvFromCartRdcr,
  slctCartProds,
} from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

let BASE_URL = "http://localhost:8000/";

if (process.env.REACT_APP_DOCKER === "true") {
  // Use the Docker URL in production
  BASE_URL = process.env.REACT_APP_DOCKER_URL;
}

const Item = ({ prod }) => {
  const dispatch = useDispatch();
  const cartProds = useSelector(slctCartProds);

  const findObjectById = (arr, id) => {
    return arr.find((item) => item.id === id);
  };

  return (
    <div className="container">
      <div
        key={prod.id}
        className="card mb-2"
        style={{
          maxWidth: "400px",
          width: "100%",
          border: "1px solid #dee2e6",
          padding: "10px",
          margin: "5px",
        }}
      >
        <div className="row">
          <div className="col-md-4">
            <img
              src={`${BASE_URL}media/${prod.image}`}
              className="img-fluid rounded-start"
              alt={prod.name}
              style={{ maxWidth: "100%", width: "200px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <strong className="card-title">{prod.name}</strong>
              <h5>${prod.price}</h5>
              <Cart count={findObjectById(cartProds, prod.id)?.amount ?? 0} />
              <p className="card-text">{prod.name} description.....</p>
              <button
                className="btn btn-success"
                style={{ margin: "5px" }}
                onClick={() => dispatch(addToCartRdcr(prod))}
              >
                +
              </button>
              {findObjectById(cartProds, prod.id)?.amount > 0 && (
                <button
                  className="btn btn-danger"
                  style={{ margin: "5px" }}
                  onClick={() => dispatch(rmvFromCartRdcr(prod))}
                >
                  -
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
