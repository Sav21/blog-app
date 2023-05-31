import { API } from "../shared/api";
export const getPosts = () => {
  return API.get("/posts");
};
export const postPosts = (title, text) => {
  return API.post("/posts", { title, text });
};

export const addComment = (comment, postId) => {
  return API.post(`/posts/${id}/comments`, { title, text });
};

export const getPostById = (id) => {
  return API.get(`/posts/${id}`);
};
export const editPosts = (title, text, id) => {
  return API.put(`/posts/${id}`, {
    title,
    text,
  });
};

export const deletePost = (id) => {
  return API.delete(`/posts/${id}`);
};
