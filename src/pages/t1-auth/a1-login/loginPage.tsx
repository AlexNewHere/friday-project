import React, { ReactElement } from 'react';

import { useFormik, FormikErrors } from 'formik';
import { Navigate } from 'react-router-dom';

import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { FormikInitialType } from 'pages';
import { loginUserThunk } from 'store';

export const LoginPage = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();

  const formik = useFormik<FormikInitialType>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values: FormikInitialType) => {
      const errors: FormikErrors<FormikInitialType> = {};
      if (!values.email) {
        errors.email = 'Email required';
      } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      } else if (!values.password) {
        errors.password = 'Password required';
      } else if (!/^[A-Z\d.+-]{8,20}$/i.test(values.password)) {
        errors.password = 'Password must be more than 7 characters';
      }
      return errors;
    },
    onSubmit: values => {
      // console.log(values);
      dispatch(loginUserThunk(values));
      formik.resetForm();
    },
  });
  if (isLoggedIn) {
    return <Navigate replace to={LINK.PROFILE} />;
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="email" {...formik.getFieldProps('email')} />
      <input type="password" {...formik.getFieldProps('password')} />
      <input type="checkbox" {...formik.getFieldProps('rememberMe')} />
      <button type="submit">Log In</button>
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}
    </form>
  );
};
