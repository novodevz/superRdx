// Import axios or your preferred HTTP client library
import axios from "axios";

// Define the base URL for your API
const BASE_URL = "http://localhost:8000/"; // Replace this with your actual API base URL

// Define the function to fetch all products
const getAllProds = async (path) => {
  try {
    // Make an HTTP GET request to fetch all products
    const response = await axios.get(BASE_URL + path);
    // Return the response data
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    // Handle errors
    throw new Error("Failed to fetch products");
  }
};

// Export the getAllProds function as a named export
export { getAllProds };
