import http from "../http-common";

const getAll = () => {
  return http.get("/packs");
};

const get = (id) => {
  return http.get(`/packs/${id}`);
};

const create = (data) => {
  return http.post("/packs", data);
};

const update = (id, data) => {
  return http.put(`/packs/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/packs/${id}`);
};

const addwolf = (id, wolf_id) => {
  return http.post(`/packs/${id}/wolf/${wolf_id}`);
};

const removewolf = (id, wolf_id) => {
  return http.delete(`/packs/${id}/wolf/${wolf_id}`);
};

const service = {
  getAll,
  get,
  create,
  update,
  remove,
  addwolf,
  removewolf,
};

export default service;
