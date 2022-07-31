import { createSlice } from '@reduxjs/toolkit';

import { AuthType } from 'store';

const initialState: AuthType = {
  _id: null,
  email: null,
  name: '',
  avatar: '',
  publicCardPacksCount: 0,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setAuthUserData: (_, action: PayloadAction<any>): any => action,
    // changeFetching: (state, action: PayloadAction<any>): any => action,
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(updateProfileThunk.pending, (state, action) => {
  //       console.log(action);
  //     })
  //     .addCase(updateProfileThunk.fulfilled, (state, action) => {
  //       console.log(action);
  //     })
  //     .addCase(updateProfileThunk.rejected, (state, action) => {
  //       console.log(action);
  //     });
  // },
});

// export const {  } = profileSlice.actions;
