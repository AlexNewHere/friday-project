import { UserRegisterData } from './loginApiTypes';

import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { FormikInitialType, updateProfileType } from 'pages';
import { AuthType, updateUserType } from 'store';

export const loginAPI = {
  ping() {
    return instance.get(ENDPOINT.PING);
  },
  login({ email, password, rememberMe }: FormikInitialType) {
    return instance.post<AuthType>(ENDPOINT.LOGIN, { email, password, rememberMe });
  },
  logOut() {
    return instance.delete(ENDPOINT.AUTH);
  },
  register({ email, password }: UserRegisterData) {
    return instance.post(ENDPOINT.REGISTER, {
      email,
      password,
    });
  },
  forgot() {
    return instance.post(ENDPOINT.FORGOT, {});
  },
  newPassword() {
    return instance.post(ENDPOINT.PASSWORD, {});
  },
  authMe() {
    return instance.post<AuthType>(ENDPOINT.AUTH);
  },
  changeMe({ name, avatar }: updateProfileType) {
    return instance.put<updateUserType>(ENDPOINT.AUTH, { name, avatar });
  },
};
