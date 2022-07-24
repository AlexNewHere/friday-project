import { instance } from 'api';
import { ENDPOINT } from 'enums';

export const loginAPI = {
  ping() {
    return instance.get(ENDPOINT.PING);
  },
  login() {
    return instance.post(ENDPOINT.LOGIN, {});
  },
  logOut() {
    return instance.delete(ENDPOINT.AUTH);
  },
  register() {
    return instance.post(ENDPOINT.REGISTER, {});
  },
  forgot() {
    return instance.post(ENDPOINT.FORGOT, {});
  },
  newPassword() {
    return instance.post(ENDPOINT.PASSWORD, {});
  },
  authMe() {
    return instance.post(ENDPOINT.AUTH);
  },
  changeMe() {
    return instance.put(ENDPOINT.AUTH, {});
  },
};
