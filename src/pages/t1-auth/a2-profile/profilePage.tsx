import React, { ReactElement } from 'react';

import userDefaultAvatar from 'assets/logo/avatar.png';
import { EditableSpan, AuthPageWrapper, LogInOutButton } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import s from 'pages/t1-auth/a2-profile/profilePage.module.scss';
import { updateProfileThunk } from 'store';

export const ProfilePage = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userEmail = useAppSelector(state => state.login.email);
  const avatar = useAppSelector(state => state.login.avatar);
  const dispatch = useAppDispatch();
  const updateUserName = (name: string): void => {
    dispatch(updateProfileThunk({ name, avatar }));
  };

  return (
    <AuthPageWrapper>
      <h1>Personal Information</h1>
      <div>
        {avatar ? (
          <img className={s.img} src={avatar} alt="avatar" />
        ) : (
          <img className={s.img} src={userDefaultAvatar} alt="avatar" />
        )}
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
