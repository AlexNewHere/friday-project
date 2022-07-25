import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { LoginType, AppDispatch } from 'store';

const initialState: LoginType = {
  _id: null,
  email: null,
  name: null,
  avatar: null,
  publicCardPacksCount: 0,
  isInitialized: false,
  isLoggedIn: true,
};

export const loginUserThunk = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
  'login/loginUserThunk',
  async () => {
    const response = await loginAPI.login();
    console.log(response);
  },
);

export const isInitializedAppThunk = createAsyncThunk<void, void>(
  'login/isInitializedAppThunk',
  async (_, thunkAPI) => {
    try {
      await loginAPI.authMe();
    } catch (e) {
      thunkAPI.fulfillWithValue(e);
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // setAuthUserData: (_, action: PayloadAction<any>): any => action,
    // changeFetching: (state, action: PayloadAction<any>): any => action,
  },
  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(isInitializedAppThunk.pending, (state, action) => {
        console.log(action);
      })
      .addCase(isInitializedAppThunk.fulfilled, (state, action) => {
        console.log(action);
        state.isInitialized = true;
      })
      .addCase(isInitializedAppThunk.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

// export const {} = loginSlice.actions;
