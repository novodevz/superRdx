import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProdsAsync,
  slctProds,
  slctIsLoading,
  slctError,
} from "./superSlice";

const Cat = () => {
  // eslint-disable-next-line
  const { dep, cat } = useParams();
  const dispatch = useDispatch();
  const prods = useSelector(slctProds);
  console.log(prods);
  const isLoading = useSelector(slctIsLoading);
  const error = useSelector(slctError);

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(getAllProdsAsync(`category/${cat}`));
  }, [dispatch, cat]);
  return (
    <div>
      <h1>cat com</h1>
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

export default Cat;
