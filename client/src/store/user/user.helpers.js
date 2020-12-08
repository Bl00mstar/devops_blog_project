import axios from "axios";

export const loginToApi = (creds) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { nick, password } = creds;
  const body = JSON.stringify({ nick, password });

  return new Promise((resolve, reject) => {
    axios
      .post(`api/auth`, body, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        // reject(new Error(err.response.data));
        reject(err.response.data);
      });
  });
};

export const isAuthenticated = (getState) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    if (localStorage.getItem("token")) {
      config.headers["x-auth-token"] = localStorage.getItem("token");
    } else {
      reject({ data: "no token here" });
    }

    axios
      .get(`api/auth/user`, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const tokenConfig = () => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (localStorage.getItem("token")) {
    config.headers["x-auth-token"] = localStorage.getItem("token");
  }
  return config;
};
