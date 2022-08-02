import React, { ReactElement } from 'react';

import { EditableSpan, AuthPageWrapper, LogInOutButton, UpdateAvatar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { updateProfileThunk } from 'store';

export const ProfilePage = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userEmail = useAppSelector(state => state.login.email);
  const avatar = useAppSelector(state => state.login.avatar);
  const publicCardPacksCount = useAppSelector(state => state.login.publicCardPacksCount);
  const dispatch = useAppDispatch();
  const updateUserName = (name: string): void => {
    dispatch(updateProfileThunk({ name, avatar }));
  };

  return (
    <AuthPageWrapper>
      <h1>Personal Information</h1>
      <UpdateAvatar avatar={avatar} />
      <EditableSpan
        name="Name: "
        withButton
        titleButton="SAVE"
        value={userName}
        onChange={updateUserName}
      />
      <p>
        <strong>{`${userEmail}`}</strong>
      </p>
      <p>
        <strong>Количество созданных колод:</strong>
        {`${publicCardPacksCount}`}
      </p>
      <LogInOutButton />
    </AuthPageWrapper>
  );
};
