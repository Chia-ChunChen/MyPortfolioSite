let apiURL = import.meta.env.VITE_APP_APIURL;
const endpoint = "/api/users";

const list = async () => {
  try {
    const res = await fetch(`${apiURL}${endpoint}`, {
      headers: { Accept: "application/json", "Content-Type": "application/json" },
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
      headers: { Accept: "application/json", "Content-Type": "application/json" },
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
      headers: { Accept: "application/json", "Content-Type": "application/json" },
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
      headers: { Accept: "application/json", "Content-Type": "application/json" },
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
      headers: { Accept: "application/json", "Content-Type": "application/json" },
    });
    return await res.json();
  } catch (e) {
    return { success: false, message: e.message };
  }
};

export { list, create, remove, update, readOne };