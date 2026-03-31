let apiURL = import.meta.env.VITE_APP_APIURL;
const endpoint = "/api/projects";

console.log("API URL:", apiURL);

const list = async () => {
  try {
    const response = await fetch(`${apiURL}${endpoint}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

const create = async (project) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

const remove = async (id) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

const update = async (project, id) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

const readOne = async (id) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};

export { list, create, remove, update, readOne };