import React from "react";
import Cart from "../cart/Cart";
import {
  addToCartRdcr,
  rmvFromCartRdcr,
  slctCartProds,
} from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Item = ({ prod }) => {
  const dispatch = useDispatch();
  const cartProds = useSelector(slctCartProds);

  const findObjectById = (arr, id) => {
    return arr.find((item) => item.id === id);
  };

  return (
    <div>
      <div
        key={prod.id}
        className="card mb-3"
        style={{
          maxWidth: "500px",
          border: "1px solid #dee2e6",
          padding: "10px",
          margin: "5px",
        }}
      >
        <div className="row g-0">
          <div className="col-lg-4">
            <img
              src={`http://localhost:8000/media/${prod.image}`}
              className="img-fluid rounded-start"
              alt={prod.name}
              style={{ width: "150px" }}
            />
          </div>
          <div className="col-lg-8">
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
