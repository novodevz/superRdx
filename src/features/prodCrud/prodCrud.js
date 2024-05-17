import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  slcAllProds,
  slcDeps,
  slcDepCats,
  slcError,
  depSelectedRdcr,
  getDepCatInfoAPI,
  prodUpdAPI,
} from "./prodCrudSlice";

import { slcIsAdmin } from "../auth/authSlice";

import axios from "axios";
import { delProdAPI } from "./prodCrudSlice";

const ProdCrud = () => {
  const dispatch = useDispatch();

  const isadmin = useSelector(slcIsAdmin);
  const allProds = useSelector(slcAllProds);
  const deps = useSelector(slcDeps);
  const depCats = useSelector(slcDepCats);
  const error = useSelector(slcError);
  // const isLoading = useSelector(slctIsLoading);

  // Track whether the API call has been made
  const [apiCalled, setApiCalled] = useState(false);

  const initFormData = {
    name: "",
    department: "",
    category: "",
    description: "",
    price: "",
  };

  const [formData, setFormData] = useState(initFormData);

  // Create references for the select and file input fields
  const departmentSelectRef = useRef(null);
  const categorySelectRef = useRef(null);
  const fileInputRef = useRef(null);

  // // Fetch products when the component mounts
  // useEffect(() => {
  //   dispatch(getDepCatInfoAPI());
  // }, [dispatch]);

  // Fetch products when the component mounts or when department changes, but only if the API call has not been made yet
  useEffect(() => {
    if (!apiCalled) {
      dispatch(getDepCatInfoAPI());
      setApiCalled(true); // Set apiCalled to true to prevent further calls
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, deps]);

  // Handle input change for text and number fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // dispatch(depSelectedRdcr({ value }));
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // Handle input change for dep, seperate handel, so that the cat display persist
  const handleDepChange = (e) => {
    const { name, value } = e.target;
    dispatch(depSelectedRdcr({ value }));
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // Fetch products when the component mounts
  useEffect(() => {}, [deps]);

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0].name,
      imageFile: e.target.files[0],
    });
    console.log(formData);
  };

  // Function to handle form submission and make POST request
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        "http://localhost:8000/add_prod",
        formData,
        config
      );
      setFormData(initFormData);
      // Reset select and file input fields
      if (departmentSelectRef.current) {
        departmentSelectRef.current.value = "select department";
      }
      if (categorySelectRef.current) {
        categorySelectRef.current.value = "select category";
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
      console.log("log: nw prod added successfuly:", response.data);
      dispatch(getDepCatInfoAPI());
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handelDel = (id) => {
    dispatch(delProdAPI(id))
      .then((action) => {
        setFormData(initFormData);
        // Reset select and file input fields
        if (departmentSelectRef.current) {
          departmentSelectRef.current.value = "select department";
        }
        if (categorySelectRef.current) {
          categorySelectRef.current.value = "select category";
        }
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
        // Handle the response as needed
        console.log(action.type, action.payload);
        dispatch(getDepCatInfoAPI());
        return;
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        // Optionally re-throw the error to propagate it further
        throw error;
      });
  };

  const handelUpd = (id, formD) => {
    console.log("in handel upd:", formD);
    dispatch(prodUpdAPI({ id, formD }))
      .then((action) => {
        setFormData(initFormData);
        // Reset select and file input fields
        if (departmentSelectRef.current) {
          departmentSelectRef.current.value = "select department";
        }
        if (categorySelectRef.current) {
          categorySelectRef.current.value = "select category";
        }
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
        console.log(action.payload);
        dispatch(getDepCatInfoAPI());
        return;
      })
      .catch((e) => {
        console.error("err:", e);
        throw e;
      });
  };

  if (!isadmin) {
    return <h1>admins only!</h1>;
  } else
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
            <select
              name="department"
              ref={departmentSelectRef}
              onChange={handleDepChange}
            >
              <option>select department</option>
              {deps &&
                deps.length !== 0 &&
                deps.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
            </select>
          </label>
          <br />
          <label>
            <select
              name="category"
              ref={categorySelectRef}
              onChange={handleChange}
            >
              <option>select category</option>
              {depCats &&
                depCats.length !== 0 &&
                depCats.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </label>
          <br />
          <label>
            Image:
            <input
              type="file"
              name="image"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </label>
          <br />
          <br />
          <button type="submit">Add Product</button>
        </form>
        <hr />
        {/* {isLoading && <p>Loading...</p>} */}
        {error && <p>Error: {error}</p>}
        {allProds && allProds.length !== 0 && (
          <ul>
            {allProds &&
              allProds !== 0 &&
              allProds.map((prod) => (
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
                        <p className="card-text">{prod.description}</p>
                        <button
                          className="btn btn-success"
                          style={{ margin: "5px" }}
                          onClick={() => handelUpd(prod.id, formData)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger"
                          style={{ margin: "5px" }}
                          onClick={() => handelDel(prod.id)}
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
