export type { AppDispatch, AppRootStateType } from './store';

export { loginSlice, setUserData } from './features/login/loginSlice';
export {
  loginUserThunk,
  isInitializedAppThunk,
  logOutUserThunk,
  updateProfileThunk,
} from './features/login/loginAsyncThunk';
export type { LoginType, AuthType, updateUserType } from './features/login/loginTypes';

export { profileSlice } from './features/profile/profileSlice';

export { registerSlice, registerUserThunk } from './features/register/registerSlice';
export type { RegisterType } from './features/register/registerTypes';
