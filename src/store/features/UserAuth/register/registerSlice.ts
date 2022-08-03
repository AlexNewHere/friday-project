import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RegisterType, registerUserThunk } from 'store/index';

const initialState: RegisterType = {
  addedUser: null,
  error: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setAddedUser: (state, action: PayloadAction<RegisterType>) => {
      state.addedUser = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        console.log(action);
      });
  },
});
export const { setAddedUser } = registerSlice.actions;
