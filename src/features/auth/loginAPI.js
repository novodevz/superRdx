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

export const refresh = async (a) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${a.access}`,
  //   },
  // };
  const res = await axios.post("http://localhost:8000/auth/token/refresh/", a);
  console.log(res, "in refresh api");
  return res.data;
};
