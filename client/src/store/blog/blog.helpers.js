import axios from "axios";
const api_url = "api:5000/";

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api_url}api/blog/post`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const getTools = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api_url}api/blog/tools`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const getTopics = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api_url}api/blog/topics`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const addTopic = (topic) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${api_url}api/blog/topics`, { newTopic: topic })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const deleteTopic = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api_url}api/blog/topics/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const addTool = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${api_url}api/blog/tools`, { data })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const deleteTool = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${api_url}api/blog/tools/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const postChapter = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${api_url}api/blog/chapter`, { data })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const getChapters = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${api_url}api/blog/chapter/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
