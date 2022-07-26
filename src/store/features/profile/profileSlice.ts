import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { updateProfileType } from 'pages';
import { ProfileType, setUserData } from 'store';

const initialState: ProfileType = {
  _id: null,
  email: null,
  name: null,
  avatar: null,
  publicCardPacksCount: 0,
};

export const updateProfileThunk = createAsyncThunk<void, updateProfileType>(
  'profile/updateUserNameThunk',
  async (data, thunkAPI) => {
    try {
      const response = await loginAPI.changeMe(data);
      thunkAPI.dispatch(setUserData(response.data));

      const res = await loginAPI.authMe();
      thunkAPI.dispatch(setUserData(res.data));
    } catch (e) {
      console.log(e);
    }
  },
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setAuthUserData: (_, action: PayloadAction<any>): any => action,
    // changeFetching: (state, action: PayloadAction<any>): any => action,
  },
  extraReducers: builder => {
    builder
      .addCase(updateProfileThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(updateProfileThunk.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(updateProfileThunk.rejected, (state, action) => {
        console.log(action);
      });
  },
});

// export const {  } = profileSlice.actions;
