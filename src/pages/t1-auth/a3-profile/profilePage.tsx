import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';

import s from './profilePage.module.css';

import userAvatar from 'assets/logo/avatar.png';
import { EditableSpan, AuthPageWrapper } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { logOutUserThunk, updateProfileThunk } from 'store';

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
    <AuthPageWrapper>
      <h1>Personal Information</h1>
      <div>
        <img className={s.img} src={userAvatar} alt="avatar" />
      </div>
      <p>
        <strong>Name: </strong>
        <EditableSpan
          value={userName}
          onChange={title => {
            UpdateUserName(title);
          }}
        />
      </p>
      <p>
        <strong>Email:</strong>
        {`${userEmail}`}
      </p>
      <p>
        <strong>Количество созданных колод:</strong>
        {`${publicCardPacksCount}`}
      </p>
      <Button
        className={s.button}
        type="submit"
        variant="contained"
        onClick={logOutHandler}
      >
        LOGOUT
      </Button>
    </AuthPageWrapper>
  );
};
