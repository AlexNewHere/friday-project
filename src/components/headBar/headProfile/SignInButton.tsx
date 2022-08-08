import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const SignInButton = (): ReactElement => {
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

  return (
    <NavLink to="/login" style={{ textDecoration: 'none' }}>
      <CustomLogInButton variant="contained">Sign in</CustomLogInButton>
    </NavLink>
  );
};
