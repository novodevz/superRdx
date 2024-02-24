import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProdsAsync,
  slctProds,
  slctIsLoading,
  slctError,
} from "./superSlice";

const Dep = () => {
  const { dep } = useParams();
  const dispatch = useDispatch();
  const prods = useSelector(slctProds);
  console.log(prods);
  const isLoading = useSelector(slctIsLoading);
  const error = useSelector(slctError);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(getAllProdsAsync(`department/${dep}`));
  }, [dispatch, dep]);
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
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:8000/media/${prod.image}.jpg`}
                    className="img-fluid rounded-start"
                    alt={prod.name}
                    style={{ width: "150px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
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

export default Dep;
