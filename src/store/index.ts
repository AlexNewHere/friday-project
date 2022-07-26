export type { AppDispatch, AppRootStateType } from './store';

export {
  loginSlice,
  isInitializedAppThunk,
  loginUserThunk,
  setUserData,
} from './features/login/loginSlice';
export type { LoginType, AuthType } from './features/login/loginTypes';

export { profileSlice } from './features/profile/profileSlice';
export type { ProfileType } from './features/profile/profileTypes';

export { registerSlice, registerUserThunk } from './features/register/registerSlice';
export type { RegisterType } from './features/register/registerTypes';
