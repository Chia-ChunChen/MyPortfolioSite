import { getToken } from "../components/auth/auth-helper";

let apiURL = import.meta.env.VITE_APP_APIURL;
const endpoint = "/api/users";

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
    const res = await fetch(`${apiURL}${endpoint}`, {
      headers: authHeaders(),
    });
    return await res.json();
  } catch (e) {
    return { success: false, message: e.message };
  }
};

const create = async (user) => {
  try {
    const res = await fetch(`${apiURL}${endpoint}`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (e) {
    return { success: false, message: e.message };
  }
};

const remove = async (id) => {
  try {
    const res = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    return await res.json();
  } catch (e) {
    return { success: false, message: e.message };
  }
};

const update = async (user, id) => {
  try {
    const res = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "PUT",
      headers: authHeaders(),
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (e) {
    return { success: false, message: e.message };
  }
};

const readOne = async (id) => {
  try {
    const res = await fetch(`${apiURL}${endpoint}/${id}`, {
      headers: authHeaders(),
    });
    return await res.json();
  } catch (e) {
    return { success: false, message: e.message };
  }
};

export { list, create, remove, update, readOne };