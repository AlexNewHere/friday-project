import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import type { AppRootStateType, AppDispatch } from 'store';

export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
