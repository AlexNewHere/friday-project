import { configureStore } from '@reduxjs/toolkit';

import { loginSlice, registerSlice, profileSlice, forgotSlice, fetchSlice } from 'store';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    profile: profileSlice.reducer,
    forgot: forgotSlice.reducer,
    fetch: fetchSlice.reducer,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
