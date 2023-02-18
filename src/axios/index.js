import api from "./interceptor";

export const get = (endpoint) => api.get(endpoint);
export const post = (endpoint, data) => api.post(endpoint, data);
export const patch = (endpoint, data) => api.patch(endpoint, data);
export const del = (endpoint) => api.delete(endpoint);
