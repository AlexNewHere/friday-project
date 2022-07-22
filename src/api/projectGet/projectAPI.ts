import { instance } from 'api';

export const projectAPI = {
  get() {
    return instance.get(`/`);
  },
  create() {
    return instance.post(`/`, {});
  },
  update() {
    return instance.put(`/`, {});
  },
  delete() {
    return instance.delete(`/`);
  },
};
