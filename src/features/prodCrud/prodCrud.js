import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProdsAsync,
  slctProds,
  slctIsLoading,
  slctError,
} from "../super/superSlice";

import axios from "axios";

const ProdCrud = () => {
  const dispatch = useDispatch();
  const prods = useSelector(slctProds);
  const isLoading = useSelector(slctIsLoading);
  const error = useSelector(slctError);
  const [allProducts, setAllProducts] = useState([]);

  const [formData, setFormData] = useState({});

  //   const [formData, setFormData] = useState({
  //     name: "",
  //     description: "",
  //     price: "",
  //     image: "",
  //     imageFile: null,
  //     department: "",
  //     category: "",
  //   });

  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(getAllProdsAsync("db/all/categories/products/"));
  }, [dispatch]);

  // Update allProducts state when prods change
  useEffect(() => {
    const updatedAllProducts = [].concat(
      ...prods.map((category) => category.products)
    );
    setAllProducts(updatedAllProducts);
  }, [prods]);

  // Handle input change for text and number fields
  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //     console.log(formData);
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevFormData) => {
  //       // Check if the key exists in the formData object
  //       if (prevFormData.hasOwnProperty(name)) {
  //         // If the key exists, update its value
  //         return { ...prevFormData, [name]: value };
  //       } else {
  //         // If the key doesn't exist, add it dynamically
  //         return { ...prevFormData, [name]: value };
  //       }
  //     });
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [name]: value,
  //     }));
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0].name,
      imageFile: e.target.files[0],
    });
  };

  // Handle file input change
  //   const handleFileChange = (e) => {
  //     setFormData({ ...formData, image: e.target.files[0] });
  //     console.log(formData);
  //   };

  // Function to handle form submission and make POST request
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure to set the Content-Type header to 'multipart/form-data'
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      // Send the POST request
      axios
        .post("http://localhost:8000/add_prod", formData, config)
        .then((response) => {
          console.log(response.data);
          dispatch(getAllProdsAsync("db/all/categories/products/")); //refresh ui with the added prod
        })
        .catch((error) => {
          console.error(error);
        });
      // Optionally, you can fetch updated product data here
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <br />
      <h2>All Products</h2>
      <form onSubmit={handleSubmit}>
        <h5>Add Product:</h5>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="number"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="number"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input type="file" name="image" onChange={handleFileChange} />
        </label>
        <br />

        <br />
        <button type="submit">Add Product</button>
      </form>
      <hr />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {prods.length !== 0 && (
        <ul>
          {allProducts.map((prod) => (
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
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <button
                      className="btn btn-success"
                      style={{ margin: "5px" }}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ margin: "5px" }}
                    >
                      Delete
                    </button>
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

export default ProdCrud;
