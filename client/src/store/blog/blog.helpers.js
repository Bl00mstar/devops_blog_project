import axios from "axios";

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`api/blog/post`)
      .then((res) => {
        resolve(res.data);
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

export const getTools = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`api/blog/tools`)
      .then((res) => {
        resolve(res.data);
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

export const getTopics = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`api/blog/topics`)
      .then((res) => {
        resolve(res.data);
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

export const addTopic = (topic) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`api/blog/topics`, { newTopic: topic })
      .then((res) => {
        resolve(res.data);
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

export const deleteTopic = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`api/blog/topics/${id}`)
      .then((res) => {
        resolve(res.data);
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

export const addTool = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`api/blog/tools`, { data })
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
      .delete(`api/blog/tools/${id}`)
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
      .post(`api/blog/chapter`, { data })
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
      .get(`api/blog/chapter/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
