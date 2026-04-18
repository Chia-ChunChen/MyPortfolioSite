let apiURL = import.meta.env.VITE_APP_APIURL;
const endpoint = "/auth";

const signin = async (user) => {
  try {
    const response = await fetch(`${apiURL}${endpoint}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export { signin };