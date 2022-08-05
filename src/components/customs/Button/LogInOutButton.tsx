import React, { ReactElement } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { logOutUserThunk } from 'store';

export const LogInOutButton = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();

  const logOutHandle = (): void => {
    dispatch(logOutUserThunk());
  };

  return isLoggedIn ? (
    <Button
      variant="outlined"
      style={{ borderRadius: '20px' }}
      startIcon={<LogoutIcon />}
      onClick={logOutHandle}
    >
      Log out
    </Button>
  ) : (
    <NavLink to="/login" style={{ textDecoration: 'none' }}>
      <Button variant="contained" style={{ borderRadius: '20px' }}>
        Sign in
      </Button>
    </NavLink>
  );
};
