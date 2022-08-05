import React, { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import email from 'assets/logo/checkEmail.svg';
import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper } from 'components';
import { LINK } from 'enums';

export const CheckEmail = (): ReactElement => {
  const navigate = useNavigate();

  const handleToBack = (): void => {
    navigate(LINK.LOGIN);
  };
  return (
    <AuthPageWrapper>
      <h1>Check Email</h1>
      <div className={style.form}>
        <Box
          sx={{
            width: '100%',
            height: '108px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={email} alt="email" />
        </Box>
        <p style={{ opacity: '0.5', lineHeight: '24px' }}>
          We`ve sent an Email with instructions to example@mail.com
        </p>
        <Button
          className={style.button}
          type="submit"
          variant="contained"
          onClick={handleToBack}
        >
          Back to login
        </Button>
      </div>
    </AuthPageWrapper>
  );
};
