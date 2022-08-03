import React, { ReactElement } from 'react';

import { Avatar } from '@mui/material';

import s from './HeadProfile.module.scss';

import { LogInOutButton } from 'components/customs/Button/LogInOutButton';
import { useAppSelector } from 'hooks/useTypeHooks';

export const HeadProfile = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userAvatar = useAppSelector(state => state.login.avatar);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return (
    <div className={s.block}>
      {isLoggedIn ? (
        <div className={s.content}>
          <LogInOutButton />
          <div>{userName}</div>
          <Avatar alt={userName} src={userAvatar} />
        </div>
      ) : (
        <LogInOutButton />
      )}
    </div>
  );
};
