// Import axios or your preferred HTTP client library
import axios from "axios";

// Define the base URL for your API
// const BASE_URL = "http://localhost:8000/";

let BASE_URL = "http://localhost:8000/";

if (process.env.REACT_APP_DOCKER === "true") {
  // Use the Docker URL in production
  BASE_URL = process.env.REACT_APP_DOCKER_URL;
}

// Define the function to fetch all products
const getAllProds = async (path) => {
  console.log(BASE_URL);
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
