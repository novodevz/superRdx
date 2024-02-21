import axios from "axios";

const BASE_URL = "http://localhost:3333/prods";

export const crudAPI = {
  get: async () => {
    try {
      const response = await axios.get(BASE_URL);
      console.log("get api: ", response.data);
      return response.data; // [list of {obj}]
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Re-throw the error to be handled by the caller
    }
  },

  post: async (productData) => {
    try {
      const response = await axios.post(BASE_URL, productData);
      console.log("post api: ", response.data);
      return response.data; // {new obj}
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  },

  put: async ({ id, nwDataObj }) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, nwDataObj);
      console.log("put api: ", response.data);
      return response.data; // {upd obj}
    } catch (error) {
      console.error(`Error updating product with ID ${id}:`, error);
      throw error;
    }
  },

  delete: async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${productId}`);
      console.log("del api: ", response.data);
      return response.data; // {}
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
      throw error;
    }
  },
};
