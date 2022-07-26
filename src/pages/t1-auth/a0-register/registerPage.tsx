import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormikErrors, useFormik } from 'formik';
import { Link, Navigate } from 'react-router-dom';

import style from './registerPage.module.scss';

import { AuthPageWrapper, AuthPageTitle } from 'components';
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
      // WARNING: need to remove (as from types)
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
      } else if (!/^[A-Z\d.+-]{3,20}$/i.test(values.password)) {
        errors.password = 'Bad password';
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
      <AuthPageTitle title="Sign Up" />
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <TextField
          {...formik.getFieldProps('email')}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          className={style.textField}
          label="Email"
          variant="standard"
        />
        <TextField
          {...formik.getFieldProps('password')}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          className={style.textField}
          label="Password"
          type="password"
          variant="standard"
        />
        <TextField
          {...formik.getFieldProps('confirmPassword')}
          error={!!formik.errors.password}
          helperText={formik.errors.password}
          className={style.textField}
          label="Confirm password"
          type="password"
          variant="standard"
        />
        <Button className={style.button} type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Sign in</Link>
    </AuthPageWrapper>
  );
};
