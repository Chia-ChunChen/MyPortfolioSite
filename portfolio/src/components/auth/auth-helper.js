import { jwtDecode } from "jwt-decode";

const authenticate = (token, cb) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("token", token);

    const payload = jwtDecode(token);
    sessionStorage.setItem("userEmail", payload.email || "");
    sessionStorage.setItem("firstname", payload.firstname || "");
  }
  cb();
};

const clearJWT = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("firstname");
  }
};

const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return !!sessionStorage.getItem("token");
};

const getToken = () => {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem("token");
};

const getFirstname = () => {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem("firstname") || "";
};

export { authenticate, clearJWT, isAuthenticated, getToken, getFirstname };