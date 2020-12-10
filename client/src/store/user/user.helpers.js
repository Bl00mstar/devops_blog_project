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
        if (res.status === 211) {
          reject(res.data);
        } else {
          resolve(res.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else if (err.request) {
          reject(err.request);
        } else {
          reject(err.message);
        }
      });
  });
};

export const isAuthenticated = async () => {
  let token = await tokenConfig();
  return new Promise((resolve, reject) => {
    axios
      .get(`api/auth/user`, { headers: token.headers })
      .then((res) => {
        if (res.status === 211) {
          reject(res.data);
        } else {
          resolve(res);
        }
      })
      .catch((err) => {
        reject(new Error(err.response.data));
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
