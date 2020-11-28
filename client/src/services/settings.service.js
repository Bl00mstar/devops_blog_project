import { tokenConfig } from "../store/user/user.helpers";
const api_url = "http://192.168.55.200:5000/";

export const fetchData = async (path, method) => {
  try {
    let token = await tokenConfig();
    const src = await fetch(api_url + path, {
      method: method,
      headers: token.headers,
    });
    const jsonData = await src.json();
    return jsonData;
  } catch (err) {
    return err.message;
  }
};

export const postData = async (path, data = {}) => {
  try {
    let token = await tokenConfig();
    const src = await fetch(api_url + path, {
      method: "POST",
      headers: token.headers,
      body: JSON.stringify(data),
    });
    const jsonData = await src.json();
    return jsonData;
  } catch (err) {
    return err.message;
  }
};

// return new Promise((resolve, reject) => {
//   if (localStorage.getItem("token")) {
//     config.headers["x-auth-token"] = localStorage.getItem("token");
//   } else {
//     reject({ data: "no token here" });
//   }

//   axios
//     .get(`${api_url}api/auth/user`, config)
//     .then((res) => {
//       resolve(res);
//     })
//     .catch((err) => {
//       reject(err);
//     });
// });
// };
