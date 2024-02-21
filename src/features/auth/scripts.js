import { jwtDecode } from "jwt-decode";

export const handelToken = (pld, remem) => {
  // Handle success response
  console.log("............handelToken............");
  console.log(pld);
  sessionStorage.setItem("access", JSON.stringify(pld.access));
  const tokenClaims = jwtDecode(pld.access);
  console.log(tokenClaims);
  console.log("remem: ", remem);
  if (remem) {
    sessionStorage.setItem("refresh", JSON.stringify(pld.refresh));
  }
  console.log("User logged in successfully:", tokenClaims);
  console.log("............end of handelToken............");
};
