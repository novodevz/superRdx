import axios from "axios";

let BASEURL = "http://localhost:8000/";

if (process.env.REACT_APP_DOCKER === "true") {
  // Use the Docker URL in production
  BASEURL = process.env.REACT_APP_DOCKER_URL;
}

export const authFn = ({ username, password, url }) => {
  const URL = BASEURL + url + "/";

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
  const res = await axios.post(BASEURL + "auth/token/refresh/", a);
  console.log(res, "in refresh api");
  return res.data;
};
