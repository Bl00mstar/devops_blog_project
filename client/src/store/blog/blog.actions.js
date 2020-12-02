import blogTypes from "./blog.types";

export const getPosts = () => {
  return { type: blogTypes.POSTS_LOADING };
};

export const loadPosts = (data) => {
  return { type: blogTypes.POSTS_LOADED, payload: data };
};

export const getTopicsTools = () => {
  return { type: blogTypes.TOPICS_TOOLS_LOADING };
};

export const loadTopicsTools = (data) => {
  return { type: blogTypes.TOPICS_TOOLS_LOADED, payload: data };
};

export const loadTopics = (data) => {
  return { type: blogTypes.TOPICS_LOADED, payload: data };
};

export const loadTools = (data) => {
  return { type: blogTypes.TOOLS_LOADED, payload: data };
};

export const addTopic = () => {
  return { type: blogTypes.TOPIC_ADD };
};
