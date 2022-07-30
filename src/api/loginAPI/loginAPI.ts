import { InfoResponseType, UserRegisterData } from './loginApiTypes';

import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { FormikInitialType, updateProfileType } from 'pages';
import { AuthType, ForgotInitialType, NewPasswordType, updateUserType } from 'store';

export const loginAPI = {
  ping() {
    return instance.get(ENDPOINT.PING);
  },
  login({ email, password, rememberMe }: FormikInitialType) {
    return instance.post<AuthType>(ENDPOINT.LOGIN, { email, password, rememberMe });
  },
  logOut() {
    return instance.delete<InfoResponseType>(ENDPOINT.AUTH);
  },
  register({ email, password }: UserRegisterData) {
    return instance.post(ENDPOINT.REGISTER, {
      email,
      password,
    });
  },
  forgot({ email, from, message }: ForgotInitialType) {
    return instance.post<InfoResponseType>(ENDPOINT.FORGOT, { email, from, message });
  },
  newPassword({ password, token }: NewPasswordType) {
    return instance.post<InfoResponseType>(ENDPOINT.PASSWORD, {
      password,
      resetPasswordToken: token,
    });
  },
  authMe() {
    return instance.post<AuthType>(ENDPOINT.AUTH);
  },
  changeMe({ name, avatar }: updateProfileType) {
    return instance.put<updateUserType>(ENDPOINT.AUTH, { name, avatar });
  },
};
