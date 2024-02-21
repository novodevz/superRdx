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
              <div className="card">
                <li key={prod.id}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <strong>Name:</strong> {prod.name} -{" "}
                      <strong>Price:</strong> ${prod.price}
                    </h5>
                    <input
                      type="text"
                      onChange={(e) => setUpdProdName(e.target.value)}
                      placeholder="New Name"
                    />
                    <input
                      type="number"
                      onChange={(e) =>
                        setUpdProdPrice(parseFloat(e.target.value))
                      }
                      placeholder="New Price"
                    />
                    <button
                      onClick={() =>
                        handleUpdateProd(prod.id, {
                          name: updProdName || prod.name,
                          price: updProdPrice || prod.price,
                        })
                      }
                    >
                      Update Product
                    </button>
                    <button onClick={() => handleDeleteProd(prod.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Crud;
