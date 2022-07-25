export type { AppDispatch, AppRootStateType } from './store';

export {
  loginSlice,
  isInitializedAppThunk,
  loginUserThunk,
} from './features/login/loginSlice';

export type { LoginType, AuthType } from './features/login/loginTypes';

export type { RegisterType } from './features/register/registerTypes';
export { registerSlice, registerUserThunk } from './features/register/registerSlice';
