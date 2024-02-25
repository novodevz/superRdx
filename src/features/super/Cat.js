import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProdsAsync,
  slctProds,
  slctIsLoading,
  slctError,
} from "./superSlice";
import {
  addToCartRdcr,
  rmvFromCartRdcr,
  slctCartProds,
} from "../cart/cartSlice";
import Cart from "../cart/Cart";

const Cat = () => {
  // eslint-disable-next-line
  const { dep, cat } = useParams();
  const dispatch = useDispatch();
  const prods = useSelector(slctProds);
  const isLoading = useSelector(slctIsLoading);
  const error = useSelector(slctError);
  const cartProds = useSelector(slctCartProds);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(getAllProdsAsync(`category/${cat}`));
  }, [dispatch, cat]);

  const findObjectById = (arr, id) => {
    return arr.find((item) => item.id === id);
  };
  return (
    <div>
      <h2>{dep} department</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {prods.length !== 0 && (
        <ul>
          {prods.products.map((prod) => (
            <div
              key={prod.id}
              className="card mb-3"
              style={{
                maxWidth: "540px",
                border: "1px solid #dee2e6",
                padding: "10px",
                margin: "5px",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:8000/media/${prod.image}`}
                    className="img-fluid rounded-start"
                    alt={prod.name}
                    style={{ width: "150px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <Cart
                      count={findObjectById(cartProds, prod.id)?.amount ?? 0}
                    />
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
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
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cat;
