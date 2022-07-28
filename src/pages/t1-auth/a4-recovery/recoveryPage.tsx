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
      <p>Enter your email address and we will send you further instructions</p>
      <Button className={style.button} type="submit" variant="contained">
        Send Instructions
      </Button>
    </div>
    <span className={style.span}>Already have an account?</span>
    <Link to={LINK.LOGIN}>Try logging in</Link>
  </AuthPageWrapper>
);
