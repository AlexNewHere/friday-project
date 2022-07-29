import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper, usePassVisible } from 'components';

export const NewPasswordPage = (): ReactElement => {
  const [visible, showPass] = usePassVisible();
  return (
    <AuthPageWrapper>
      <h1>Create new password</h1>
      <div className={style.form}>
        <TextField
          variant="standard"
          label="Password"
          type={visible}
          className={style.textField}
          InputProps={{
            endAdornment: showPass,
          }}
        />
        <p style={{ opacity: '0.5', textAlign: 'start', lineHeight: '24px' }}>
          Create new password and we will send you further instructions email
        </p>
        <Button className={style.button} type="submit" variant="contained">
          Create new password
        </Button>
      </div>
    </AuthPageWrapper>
  );
};
