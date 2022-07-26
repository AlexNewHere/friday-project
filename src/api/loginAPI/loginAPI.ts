import { instance } from 'api';
import { ENDPOINT } from 'enums';
import { FormikInitialType, FormikRegisterType, updateProfileType } from 'pages';
import { AuthType } from 'store';

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
  register(data: FormikRegisterType) {
    return instance.post(ENDPOINT.REGISTER, { ...data });
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
    return instance.put(ENDPOINT.AUTH, { name, avatar });
  },
};
