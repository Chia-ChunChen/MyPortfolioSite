import { getToken } from "../components/auth/auth-helper";

let apiURL = import.meta.env.VITE_APP_APIURL;
const endpoint = "/api/services";

const authHeaders = () => {
  const token = getToken();
  return token
    ? {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
};

const list = async () => {
  try {
    const response = await fetch(`${apiURL}${endpoint}`, {
      method: "GET",
      headers: authHeaders(),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const create = async (service) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(service),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const remove = async (id) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const update = async (service, id) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "PUT",
      headers: authHeaders(),
      body: JSON.stringify(service),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const readOne = async (id) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "GET",
      headers: authHeaders(),
    });
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export { list, create, remove, update, readOne };