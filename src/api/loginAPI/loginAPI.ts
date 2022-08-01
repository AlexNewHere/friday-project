import { UserRegisterData } from './loginApiTypes';

import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { FormikInitialType, updateProfileType } from 'pages';
import { AuthType, ForgotInitialType, NewPasswordType, updateUserType } from 'store';

export const loginAPI = {
  login({ email, password, rememberMe }: FormikInitialType) {
    return instance.post<AuthType>(ENDPOINT.LOGIN, { email, password, rememberMe });
  },
  logOut() {
    return instance.delete<{ error: string | null }>(ENDPOINT.AUTH);
  },
  register({ email, password }: UserRegisterData) {
    return instance.post(ENDPOINT.REGISTER, {
      email,
      password,
    });
  },
  forgot({ email, from, message }: ForgotInitialType) {
    return instance.post<{ error: string | null }>(ENDPOINT.FORGOT, {
      email,
      from,
      message,
    });
  },
  newPassword({ password, token }: NewPasswordType) {
    return instance.post<{ error: string | null }>(ENDPOINT.PASSWORD, {
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
