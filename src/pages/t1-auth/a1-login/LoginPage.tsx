import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';

import { loginFormSchema } from 'common';
import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper, usePassVisible } from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { FormikInitialType } from 'pages';
import { loginUserThunk } from 'store';

export const LoginPage = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();
  const [visible, showPass] = usePassVisible();

  const formik = useFormik<FormikInitialType>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: loginFormSchema,
    onSubmit: async values => {
      await dispatch(loginUserThunk(values));
      formik.resetForm();
    },
  });
  if (isLoggedIn) {
    return <Navigate replace to={LINK.PROFILE} />;
  }
  return (
    <AuthPageWrapper>
      <h1>Sign in</h1>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <TextField
          {...formik.getFieldProps('email')}
          error={!!formik.errors.email && formik.values.email.length > 0}
          helperText={formik.errors.email}
          label="Email"
          variant="standard"
          className={style.textField}
        />
        <TextField
          {...formik.getFieldProps('password')}
          error={!!formik.errors.password && formik.values.password.length > 0}
          helperText={formik.values.password.length > 0 && formik.errors.password}
          variant="standard"
          label="Password"
          type={visible}
          className={style.textField}
          InputProps={{
            endAdornment: showPass,
          }}
        />
        <p>
          <Checkbox {...formik.getFieldProps('rememberMe')} />
          Remember me
        </p>
        <p>
          <Link to={LINK.RECOVER}>Forgot password?</Link>
        </p>
        <Button
          className={style.button}
          type="submit"
          variant="contained"
          disabled={!formik.dirty || !formik.isValid}
        >
          Sign In
        </Button>
      </form>
      <span className={style.span}>Don&apos;t have an account?</span>
      <Link to="/register">Sign up</Link>
    </AuthPageWrapper>
  );
};
