import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';

import { createNewPasswordSchema } from 'common';
import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper, usePassVisible } from 'components';
import { LINK } from 'enums';
import { useAppDispatch } from 'hooks/useTypeHooks';
import { newPasswordThunk } from 'store';

export const NewPasswordPage = (): ReactElement => {
  const [visible, showPass] = usePassVisible();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token } = useParams<string>();
  const formik = useFormik<{ password: string }>({
    initialValues: {
      password: '',
    },
    validationSchema: createNewPasswordSchema,
    onSubmit: async ({ password }) => {
      if (token !== undefined) {
        const res = await dispatch(newPasswordThunk({ password, token }));
        if (res.payload) {
          formik.resetForm();
          navigate(LINK.LOGIN);
        }
      }
    },
  });

  return (
    <AuthPageWrapper>
      <h1>Create new password</h1>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <TextField
          {...formik.getFieldProps('password')}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
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
        <Button
          className={style.button}
          type="submit"
          variant="contained"
          disabled={!formik.dirty || !formik.isValid}
        >
          Create new password
        </Button>
      </form>
    </AuthPageWrapper>
  );
};
