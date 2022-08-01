import React, { ReactElement } from 'react';

import { PhotoCamera } from '@mui/icons-material';
import { Avatar, Badge, IconButton } from '@mui/material';

import userDefaultAvatar from 'assets/logo/avatar.png';
import { EditableSpan, AuthPageWrapper, LogInOutButton } from 'components';
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
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <IconButton color="default" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        }
      >
        <Avatar
          src={avatar || userDefaultAvatar}
          alt="avatar"
          sx={{ width: 120, height: 120 }}
        />
      </Badge>
      <p>
        <EditableSpan
          name="Name: "
          withButton
          titleButton="SAVE"
          value={userName}
          onChange={updateUserName}
        />
      </p>
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
