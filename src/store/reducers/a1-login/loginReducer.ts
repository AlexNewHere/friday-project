import { Dispatch } from 'redux';

import { projectAPI } from 'api';

export type ActionsType = ReturnType<typeof LoginAC>;

type LoginType = {
  id: string;
};
const initialState: LoginType = {
  id: '',
};

export const loginReducer = (
  state: LoginType = initialState,
  action: ActionsType,
): LoginType => {
  switch (action.type) {
    case 'LOGIN': {
      return state;
    }
    default:
      return state;
  }
};

export const LoginAC = () => ({ type: 'LOGIN', payload: {} } as const);

export const thunkCreator = () => (dispatch: Dispatch<ActionsType>) => {
  projectAPI.get().then(() => {
    dispatch(LoginAC());
  });
};
