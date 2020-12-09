import axios from "axios";

export const postPostsByToolName = (item) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`api/blog/toolpost`, { device: item })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
