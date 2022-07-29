import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper } from 'components';
import { LINK } from 'enums';

export const RecoveryPage = (): ReactElement => (
  <AuthPageWrapper>
    <h1>Forgot your password?</h1>
    <div className={style.form}>
      <TextField
        variant="standard"
        label="Email"
        type="email"
        className={style.textField}
      />
      <p style={{ opacity: '0.5', textAlign: 'start', lineHeight: '24px' }}>
        Enter your email address and we will send you further instructions
      </p>
      <Button className={style.button} type="submit" variant="contained">
        Send Instructions
      </Button>
    </div>
    <span className={style.span}>Did you remember your password?</span>
    <Link to={LINK.LOGIN}>Try logging in</Link>
  </AuthPageWrapper>
);
