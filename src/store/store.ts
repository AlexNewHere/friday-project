import { configureStore } from '@reduxjs/toolkit';

import { loginSlice, registerSlice, profileSlice } from 'store';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    profile: profileSlice.reducer,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
