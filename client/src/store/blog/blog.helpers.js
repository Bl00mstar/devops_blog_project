import axios from "axios";
import { tokenConfig } from "../user/user.helpers";

export const handleRequest = (method, url, data) => {
  let token = tokenConfig();
  return new Promise((resolve, reject) => {
    let config = {};
    if (method === "POST" || method === "DELETE") {
      config = token.headers;
    }

    const requestConfig = {
      method,
      data,
      timeout: 10000,
      url,
      headers: config,
    };

    axios(requestConfig)
      .then((res) => {
        resolve(res.data.message);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error.request);
        } else {
          reject(error);
        }
      });
  });
};
