// prodCrudAPI.js
import axios from "axios";
const BaseURL = "http://localhost:8000/";
// Function to get department and category info
export const getDepCatInfo = async () => {
  try {
    const response = await axios.get(BaseURL + "get_dep_cat_info");
    return response.data;
  } catch (error) {
    console.error("Error fetching department and category IDs:", error);
  }
};
