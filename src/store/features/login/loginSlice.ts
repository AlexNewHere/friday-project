import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginAPI } from 'api';
import { FormikInitialType } from 'pages';
import { LoginType, AppDispatch } from 'store';

const initialState: LoginType = {
  _id: null,
  email: null,
  name: '',
  avatar: null,
  publicCardPacksCount: 0,
  isInitialized: false,
  isLoggedIn: false,
};

export const loginUserThunk = createAsyncThunk<
  void,
  FormikInitialType,
  { dispatch: AppDispatch }
>('login/loginUserThunk', async data => {
  const response = await loginAPI.login(data);
  console.log(response);
});

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
        state.isLoggedIn = true;
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
