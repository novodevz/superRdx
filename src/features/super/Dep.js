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
      {prods && (
        <ul>
          {prods.products.map((prod) => (
            <li key={prod.id}>{prod.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dep;
