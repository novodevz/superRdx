import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  slctProds,
  slctStatus,
  slctError,
  fetchProds,
  createProd,
  updateProd,
  deleteProd,
} from "./crudSlice";

const Crud = () => {
  const dispatch = useDispatch();
  const prods = useSelector(slctProds);
  const status = useSelector(slctStatus);
  const error = useSelector(slctError);
  const [newProdName, setNewProdName] = useState("");
  const [newProdPrice, setNewProdPrice] = useState(0);
  const [updProdName, setUpdProdName] = useState("");
  const [updProdPrice, setUpdProdPrice] = useState("");

  useEffect(() => {
    dispatch(fetchProds());
  }, [dispatch]);

  const handleCreateProd = () => {
    const newProdData = { name: newProdName, price: newProdPrice };
    dispatch(createProd(newProdData));
    setNewProdName("");
    setNewProdPrice(0);
  };

  const handleUpdateProd = (id, nwDataObj) => {
    dispatch(updateProd({ id, nwDataObj }));
    setUpdProdName("");
    setUpdProdPrice(0);
  };

  const handleDeleteProd = (id) => {
    dispatch(deleteProd(id));
  };

  return (
    <div>
      <h2>Products</h2>
      {status === "pending" && <div>Loading...</div>}
      {status === "rejected" && <div>Error: {error}</div>}
      {status === "fulfilled" && (
        <div>
          <div>
            <input
              type="text"
              value={newProdName}
              onChange={(e) => setNewProdName(e.target.value)}
              placeholder="Product Name"
            />
            {" | "}
            <input
              type="number"
              value={newProdPrice}
              onChange={(e) => setNewProdPrice(parseFloat(e.target.value))}
              placeholder="Product Price"
            />
            {" | "}
            <button onClick={handleCreateProd}>Create Product</button>
          </div>
          <hr />
          <ul>
            {prods.length === 0 ? <h2>list is empty</h2> : <h2>prod list:</h2>}
            {prods.map((prod) => (
              <li key={prod.id}>
                <strong>name:</strong> {prod.name} - <strong>price:</strong> $
                {prod.price}
                {" | "}
                <input
                  type="text"
                  // value={updProdName}
                  onChange={(e) => {
                    const value = e.target.value;
                    setUpdProdName(value);
                  }}
                  placeholder="New Name"
                />
                {" | "}
                <input
                  type="number"
                  // value={updProdPrice}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setUpdProdPrice(value);
                  }}
                  placeholder="New Price"
                />
                {" | "}
                <button
                  onClick={() =>
                    handleUpdateProd(prod.id, {
                      name: updProdName ?? prod.name,
                      price: updProdPrice ?? prod.price,
                    })
                  }
                >
                  Update product
                </button>
                {" | "}
                <button onClick={() => handleDeleteProd(prod.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Crud;
