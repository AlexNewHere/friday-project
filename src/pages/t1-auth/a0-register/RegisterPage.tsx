import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { registerFormSchema } from 'common';
import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper, usePassVisible } from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { FormikRegisterType } from 'pages';
import { registerUserThunk } from 'store';

export const RegisterPage = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [visibleMain, showPassMain] = usePassVisible();
  const [visibleConfirm, showPassConfirm] = usePassVisible();

  const formik = useFormik<FormikRegisterType>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerFormSchema,
    onSubmit: async values => {
      const res = await dispatch(registerUserThunk(values));
      if (res.payload) {
        formik.resetForm();
        navigate(LINK.LOGIN);
      }
    },
  });
  if (isLoggedIn) {
    return <Navigate to={LINK.PROFILE} />;
  }

  return (
    <AuthPageWrapper>
      <h1>Sign up</h1>
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
          label="Password"
          type={visibleMain}
          variant="standard"
          className={style.textField}
          InputProps={{
            endAdornment: showPassMain,
          }}
        />
        <TextField
          {...formik.getFieldProps('confirmPassword')}
          error={
            !!formik.errors.confirmPassword && formik.values.confirmPassword.length > 0
          }
          helperText={
            formik.values.confirmPassword.length > 0 && formik.errors.confirmPassword
          }
          label="Confirm password"
          type={visibleConfirm}
          variant="standard"
          className={style.textField}
          InputProps={{
            endAdornment: showPassConfirm,
          }}
        />
        <Button
          className={style.button}
          type="submit"
          variant="contained"
          disabled={!formik.dirty || !formik.isValid}
        >
          Sign Up
        </Button>
      </form>
      <span className={style.span}>Already have an account?</span>
      <Link to={LINK.LOGIN}>Sign in</Link>
    </AuthPageWrapper>
  );
};
