import React, { ReactElement } from 'react';

import { FormikErrors, useFormik } from 'formik';

import { useAppDispatch } from 'hooks/useTypeHooks';
import { FormikRegisterType } from 'pages';
import { registerUserThunk } from 'store';

export const RegisterPage = (): ReactElement => {
  const dispatch = useAppDispatch();

  const formik = useFormik<FormikRegisterType>({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values: FormikRegisterType) => {
      const errors: FormikErrors<FormikRegisterType> = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      } else if (!values.password) {
        errors.password = 'Required';
      } else if (!/^[A-Z\d.+-]{3,20}$/i.test(values.password)) {
        errors.password = 'Bad password';
      }
      return errors;
    },
    onSubmit: values => {
      // console.log(values);
      dispatch(registerUserThunk(values));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="email" {...formik.getFieldProps('email')} />
      <input type="password" {...formik.getFieldProps('password')} />
      <button type="submit">Register</button>
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}
    </form>
  );
};
