import React, { ReactElement } from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { logOutUserThunk } from 'store';

export const LogInOutButton = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();

  const logOutHandle = (): void => {
    dispatch(logOutUserThunk());
  };

  const CustomLogOutButton = styled(Button)({
    background: '#FCFCFC',
    boxShadow:
      '0 2px 10px rgba(109, 109, 109, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
    borderRadius: '30px',
    color: '#000000',
    border: 'none',
    opacity: 0.7,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
      border: 'none',
      opacity: 1,
    },
  });

  const CustomLogInButton = styled(Button)({
    px: '28px',
    py: '8px',
    borderRadius: '30px',
    textTransform: 'none',
    background: '#366EFF',
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
  });

  return isLoggedIn ? (
    <CustomLogOutButton
      variant="outlined"
      startIcon={<LogoutIcon />}
      onClick={logOutHandle}
    >
      Log out
    </CustomLogOutButton>
  ) : (
    <NavLink to="/login" style={{ textDecoration: 'none' }}>
      <CustomLogInButton variant="contained">Sign in</CustomLogInButton>
    </NavLink>
  );
};
