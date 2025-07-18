import api from './api';

export const postService = {
  getAllPosts: async (page = 1, limit = 10, category = null) => {
    let url = `/posts?page=${page}&limit=${limit}`;
    if (category) url += `&category=${category}`;
    const response = await api.get(url);
    return response.data;
  },
  getPost: async (idOrSlug) => {
    const response = await api.get(`/posts/${idOrSlug}`);
    return response.data;
  },
  createPost: async (postData) => {
    const response = await api.post('/posts', postData);
    return response.data;
  },
  updatePost: async (id, postData) => {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  },
  deletePost: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  },
  addComment: async (postId, commentData) => {
    const response = await api.post(`/posts/${postId}/comments`, commentData);
    return response.data;
  },
  searchPosts: async (query) => {
    const response = await api.get(`/posts/search?q=${query}`);
    return response.data;
  },
};