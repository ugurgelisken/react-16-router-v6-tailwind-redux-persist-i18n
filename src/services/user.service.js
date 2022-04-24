import axios from "axios";

export { getUser, jwtValidate, updateUserData };

// AXIOS CONFIG
axios.defaults.baseURL = import.meta.env.API_URL;
console.log(import.meta.env.API_URL);
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// GET USER
const getUser = async (jwt, id) => {
  return axios
    .get("user/" + id, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

// JWT/SESSION VALIDATE
const jwtValidate = (jwt) => {
  return axios
    .post(
      "session",
      {},
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    .then((data) => {
      if (window.location.pathname === "/no-service") {
        window.location.href = "/";
      }
      return data;
    })
    .catch((error) => {
      if (error.resonse) {
        return error.response;
      } else {
        setTimeout(() => {
          window.location.href = "/no-service";
        }, 10 * 1000);
        return null;
      }
    });
};

// UPDATE USER DATA
const updateUserData = async (jwt, id, params) => {
  return axios
    .put("admin/" + id, params, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};
