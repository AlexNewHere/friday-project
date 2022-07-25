import React, { ReactElement } from 'react';

import { useFormik, FormikErrors } from 'formik';

import { FormikInitialType } from 'pages';

export const LoginPage = (): ReactElement => {
  const formik = useFormik<FormikInitialType>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values: FormikInitialType) => {
      const errors: FormikErrors<FormikInitialType> = {};
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
      console.log(values);
      // dispatch(loginTC(values));
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="email" {...formik.getFieldProps('email')} />
      <input type="password" {...formik.getFieldProps('password')} />
      <input
        type="checkbox"
        name="rememberMe"
        onChange={formik.handleChange}
        checked={formik.values.rememberMe}
      />
      <button type="submit">Log In</button>
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}
    </form>
  );
};
