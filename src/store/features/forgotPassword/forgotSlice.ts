import { createSlice } from '@reduxjs/toolkit';

import { forgotPasswordThunk, ForgotInitialType, newPasswordThunk } from 'store';

const initialState: ForgotInitialType = {
  email: '',
  from: 'Hello. Sent from https://alexnewhere.github.io/friday-project/ ',
  message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/password/$token$'>
link</a>
</div>`,
};

export const forgotSlice = createSlice({
  name: 'forgot',
  initialState,
  reducers: {
    // changeFetching: (state, action: PayloadAction<any>): any => action,
  },
  extraReducers: builder => {
    builder
      .addCase(forgotPasswordThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        console.log(action.error);
      })
      .addCase(newPasswordThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(newPasswordThunk.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(newPasswordThunk.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});
