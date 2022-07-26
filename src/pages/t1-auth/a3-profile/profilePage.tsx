import React, { ReactElement } from 'react';

import userAvatar from '../../../assets/logo/avatar.png';

import s from './profilePage.module.css';

import { SuperButton } from 'components';
import { EditableSpan } from 'components/editableSpan/EditableSpan';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { logOutUserThunk } from 'store/features/login/loginSlice';
import { updateProfileThunk } from 'store/features/profile/profileSlice';

const avatar: string = '';

export const ProfilePage = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userEmail = useAppSelector(state => state.login.email);
  const publicCardPacksCount = useAppSelector(state => state.login.publicCardPacksCount);
  const dispatch = useAppDispatch();
  const UpdateUserName = (name: string): void => {
    dispatch(updateProfileThunk({ name, avatar }));
  };
  const logOutHandler = (): void => {
    dispatch(logOutUserThunk());
  };

  return (
    <div>
      <div>Personal Information</div>
      <div>
        <img className={s.img} src={userAvatar} alt="avatar" />
      </div>
      <div>
        Name:{' '}
        <EditableSpan
          value={userName}
          onChange={title => {
            UpdateUserName(title);
          }}
        />
        ✎
      </div>
      <div>Email:{`${userEmail}`}</div>
      <div>Количество созданных колод:{`${publicCardPacksCount}`}</div>
      <SuperButton onClick={logOutHandler}>LOGOUT</SuperButton>
    </div>
  );
};
