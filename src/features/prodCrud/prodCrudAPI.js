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

export const delProd = async (id) => {
  try {
    const res = await axios.delete(BaseURL + "del_prod/" + id);
    return res.data;
  } catch (e) {
    console.error("err del prod:", e);
  }
};

export const prodUpd = async (a) => {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const res = await axios.put(
      BaseURL + "upd_prod/" + a.id + "/",
      a.formD,
      config
    );
    return res.data;
  } catch (e) {
    console.error("err upd prod:", e);
  }
};
