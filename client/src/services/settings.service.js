const api_url = "http://192.168.55.200:5000/";

export const fetchData = async (path, method) => {
  try {
    const src = await fetch(api_url + path, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await src.json();
    return jsonData;
  } catch (err) {
    console.error(err.message);
  }
};

export const postData = async (path, data = {}) => {
  try {
    const src = await fetch(api_url + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const jsonData = await src.json();
    return jsonData;
  } catch (err) {
    return err.message;
  }
};
