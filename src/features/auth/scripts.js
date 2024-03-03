import { jwtDecode } from "jwt-decode";

export const handelToken = (pld, remem) => {
  sessionStorage.clear();
  // Handle success response
  console.log("............handelToken............");
  console.log(pld);
  sessionStorage.setItem("access", JSON.stringify(pld.access));
  const tokenClaims = jwtDecode(pld.access);
  console.log(tokenClaims);
  console.log("rememmmmmmmmmmmmmmmmm: ", remem);
  if (remem) {
    sessionStorage.setItem("refresh", JSON.stringify(pld.refresh));
  }
  console.log("User logged in successfully:", tokenClaims);
  console.log("............end of handelToken............");
  return tokenClaims.isadmin;
};

export const tokenTTL = () => {
  let token = sessionStorage.getItem("access");
  if (!token) return null;
  token = JSON.parse(token);
  // console.log(jwtDecode(token));
  token = jwtDecode(token);
  // const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Current time in seconds
  // Calculate the difference between the expiration time and the current time
  // const ttl = token.exp - currentTimeInSeconds;
  const ttl = token.exp - token.iat;
  console.log("ttl in sec", ttl);
  console.log("ttl in min", ttl / 60);
  console.log(typeof ttl);
  return ttl; // Return the difference in minutes
};
