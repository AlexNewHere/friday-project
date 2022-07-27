import { UserRegisterData } from './loginApiTypes';

import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { FormikInitialType, updateProfileType } from 'pages';
import { AuthType, updateUserType } from 'store';

export const loginAPI = {
  ping() {
    return instance.get(ENDPOINT.PING);
  },
  login(data: FormikInitialType) {
    return instance.post<AuthType>(ENDPOINT.LOGIN, { ...data });
  },
  logOut() {
    return instance.delete(ENDPOINT.AUTH);
  },
  register(data: UserRegisterData) {
    return instance.post(ENDPOINT.REGISTER, {
      email: data.email,
      password: data.password,
    });
  },
  forgot() {
    return instance.post(ENDPOINT.FORGOT, {});
  },
  newPassword() {
    return instance.post(ENDPOINT.PASSWORD, {});
  },
  authMe() {
    return instance.post<AuthType>(ENDPOINT.AUTH, {});
  },
  changeMe({ name, avatar }: updateProfileType) {
    return instance.put<updateUserType>(ENDPOINT.AUTH, { name, avatar });
  },
};
