import axios from "axios";
const api_url = "http://localhost:5000/";

export const postPostsByToolName = (item) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${api_url}api/blog/toolpost`, { device: item })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
