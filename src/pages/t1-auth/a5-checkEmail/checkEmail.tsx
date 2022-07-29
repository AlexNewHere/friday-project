import React, { ReactElement } from 'react';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import email from 'assets/logo/checkEmail.svg';
import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper } from 'components';

export const CheckEmail = (): ReactElement => (
  <AuthPageWrapper>
    <h1>Check Email</h1>
    <div className={style.form}>
      <Box
        sx={{ width: '100%', height: '108px', display: 'flex', justifyContent: 'center' }}
      >
        <img src={email} alt="email" />
      </Box>
      <p style={{ opacity: '0.5', lineHeight: '24px' }}>
        We`ve sent an Email with instructions to example@mail.com
      </p>
      <Button className={style.button} type="submit" variant="contained">
        Send Instructions
      </Button>
    </div>
  </AuthPageWrapper>
);
