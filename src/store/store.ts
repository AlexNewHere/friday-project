import { configureStore } from '@reduxjs/toolkit';

import { loginSlice } from 'store/features';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
