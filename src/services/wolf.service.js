import http from "../http-common";

const getAll = () => {
  return http.get("/wolves");
};

const get = (id) => {
  return http.get(`/wolves/${id}`);
};

const create = (data) => {
  return http.post("/wolves", data);
};

const update = (id, data) => {
  return http.put(`/wolves/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/wolves/${id}`);
};

const service = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default service;
