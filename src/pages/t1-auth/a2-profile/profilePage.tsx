import React, { ReactElement } from 'react';

import s from './profilePage.module.css';

import userAvatar from 'assets/logo/avatar.png';
import { EditableSpan, AuthPageWrapper, LogInOutButton } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { updateProfileThunk } from 'store';

const avatar: string = '';

export const ProfilePage = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userEmail = useAppSelector(state => state.login.email);
  const dispatch = useAppDispatch();
  const updateUserName = (name: string): void => {
    dispatch(updateProfileThunk({ name, avatar }));
  };

  return (
    <AuthPageWrapper>
      <h1>Personal Information</h1>
      <div>
        <img className={s.img} src={userAvatar} alt="avatar" />
      </div>
      <p>
        <EditableSpan
          name="Name: "
          withButton
          titleButton="SAVE"
          value={userName}
          onChange={(title: string) => {
            updateUserName(title);
          }}
        />
      </p>
      <p>{`${userEmail}`}</p>
      <LogInOutButton />
    </AuthPageWrapper>
  );
};
