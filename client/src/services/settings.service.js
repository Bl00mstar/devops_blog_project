import { tokenConfig } from "../store/user/user.helpers";

export const fetchData = async (path, method) => {
  try {
    let token = await tokenConfig();
    const src = await fetch(path, {
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
    const src = await fetch(path, {
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
