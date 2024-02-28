import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProdsAsync,
  slctProds,
  slctIsLoading,
  slctError,
} from "./superSlice";
import Item from "./Item";

const Dep = () => {
  const { dep } = useParams();
  const dispatch = useDispatch();
  const prods = useSelector(slctProds);
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
            <Item prod={prod} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dep;
