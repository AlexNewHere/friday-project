import { createAsyncThunk } from '@reduxjs/toolkit';

import { CreatePackType, EditPackType, packsAPI } from 'api';
import {
  AppDispatch,
  AppRootStateType,
  changeFetching,
  ParamsType,
  setPacks,
  setParams,
} from 'store/index';
import { handleError } from 'untils/handleError';

export const getPacksThunk = createAsyncThunk<
  void,
  ParamsType,
  { dispatch: AppDispatch }
>('packs/getPacksThunk', async (params, { dispatch }) => {
  dispatch(changeFetching(true));
  try {
    const res = await packsAPI.getPacks(params);
    dispatch(changeFetching(false));
    dispatch(setParams(params));
    dispatch(setPacks(res.data));
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

export const createPacksThunk = createAsyncThunk<
  boolean | undefined,
  CreatePackType,
  { dispatch: AppDispatch; state: AppRootStateType }
>('packs/createPacksThunk', async (data, { dispatch, getState }) => {
  dispatch(changeFetching(true));
  const { params } = getState();
  try {
    await packsAPI.createPacks(data);
    dispatch(changeFetching(false));
    dispatch(getPacksThunk(params));
    return true; // for close modal window
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

export const editPacksThunk = createAsyncThunk<
  boolean | undefined,
  EditPackType,
  { dispatch: AppDispatch; state: AppRootStateType }
>('packs/editPacksThunk', async (data, { dispatch, getState }) => {
  dispatch(changeFetching(true));
  const { params } = getState();
  try {
    await packsAPI.editPacks(data);
    dispatch(changeFetching(false));
    dispatch(getPacksThunk(params));
    return true; // for close modal window
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});

export const removePacksThunk = createAsyncThunk<
  boolean | undefined,
  string,
  { dispatch: AppDispatch; state: AppRootStateType }
>('packs/removePacksThunk', async (id, { dispatch, getState }) => {
  dispatch(changeFetching(true));
  const { params } = getState();
  try {
    await packsAPI.removePacks(id);
    dispatch(changeFetching(false));
    dispatch(getPacksThunk(params));
    return true; // for close modal window
  } catch (e) {
    dispatch(changeFetching(false));
    handleError(e, dispatch);
  }
});
