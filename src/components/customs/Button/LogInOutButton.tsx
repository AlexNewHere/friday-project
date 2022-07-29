import React, { ReactElement } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
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
    <Button variant="outlined" startIcon={<LogoutIcon />} onClick={logOutHandle}>
      Log out
    </Button>
  ) : (
    <NavLink to="/login" style={{ textDecoration: 'none' }}>
      <Button variant="contained">Log in</Button>
    </NavLink>
  );
};
