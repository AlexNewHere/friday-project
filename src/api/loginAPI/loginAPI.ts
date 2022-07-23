import { instance } from 'api';

export const loginAPI = {
  ping() {
    return instance.get(`/ping`);
  },
  login() {
    return instance.post(`/auth/login`, {});
  },
  logOut() {
    return instance.delete(`/auth/me`);
  },
  register() {
    return instance.post(`/auth/register`, {});
  },
  forgot() {
    return instance.post(` /auth/forgot`, {});
  },
  newPassword() {
    return instance.post(` /auth/set-new-password`, {});
  },
  authMe() {
    return instance.post(`/auth/me`);
  },
  changeMe() {
    return instance.put(`/auth/me`, {});
  },
};
