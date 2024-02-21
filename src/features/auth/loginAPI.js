import axios from "axios";

export const authFn = ({ username, password, url }) => {
  const URL = "http://localhost:8000/" + url + "/";

  // Data to be sent in the request body
  const data = {
    username: username,
    password: password,
  };

  // Making a POST request using Axios
  return axios.post(URL, data);
};
