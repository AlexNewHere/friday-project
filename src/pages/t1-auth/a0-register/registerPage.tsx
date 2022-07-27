import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormikErrors, useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';

import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper } from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { FormikRegisterType } from 'pages';
import { registerUserThunk } from 'store';

export const RegisterPage = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();

  const formik = useFormik<FormikRegisterType>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values: FormikRegisterType) => {
      const errors: FormikErrors<FormikRegisterType> = {};
      if (!values.email) {
        errors.email = 'Email required';
      } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      } else if (!values.password) {
        errors.password = 'Password required';
      } else if (!/^[A-Z\d.+-]{8,20}$/i.test(values.password)) {
        errors.password = 'Password must be more than 7 characters';
      } else if (values.password !== formik.values.confirmPassword) {
        errors.password = "Passwords don't match";
      }
      return errors;
    },
    onSubmit: values => {
      dispatch(registerUserThunk(values));
      formik.resetForm();
    },
  });
  if (isLoggedIn) {
    return <Navigate replace to={LINK.PROFILE} />;
  }
  return (
    <AuthPageWrapper>
      <h1>Sign up</h1>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <TextField
          {...formik.getFieldProps('email')}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          label="Email"
          variant="standard"
          className={style.textField}
        />
        <TextField
          {...formik.getFieldProps('password')}
          error={!!formik.errors.password}
          label="Password"
          type="password"
          variant="standard"
          className={style.textField}
        />
        <TextField
          {...formik.getFieldProps('confirmPassword')}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          label="Confirm password"
          type="password"
          variant="standard"
          className={style.textField}
        />
        <Button className={style.button} type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
      <span className={style.span}>Already have an account?</span>
      <Link to={LINK.LOGIN}>Sign in</Link>
    </AuthPageWrapper>
  );
};
