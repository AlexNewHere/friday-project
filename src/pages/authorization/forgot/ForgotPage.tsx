import React, { ReactElement } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { forgotFormSchema } from 'common';
import style from 'common/styles/authPage.module.scss';
import { AuthPageWrapper } from 'components';
import { LINK } from 'enums';
import { useAppDispatch } from 'hooks/useTypeHooks';
import { forgotPasswordThunk } from 'store';

export const ForgotPage = (): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formik = useFormik<{ email: string }>({
    initialValues: {
      email: '',
    },
    validationSchema: forgotFormSchema,
    onSubmit: async ({ email }) => {
      const res = await dispatch(forgotPasswordThunk({ email }));
      if (res.payload) {
        formik.resetForm();
        navigate(LINK.EMAIL);
      }
    },
  });
  return (
    <AuthPageWrapper>
      <h1>Forgot your password?</h1>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <TextField
          {...formik.getFieldProps('email')}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          variant="standard"
          label="Email"
          type="email"
          className={style.textField}
        />
        <p style={{ opacity: '0.5', textAlign: 'start', lineHeight: '24px' }}>
          Enter your email address and we will send you further instructions
        </p>
        <Button
          className={style.button}
          type="submit"
          variant="contained"
          disabled={!formik.dirty || !formik.isValid}
        >
          Send Instructions
        </Button>
      </form>
      <span className={style.span}>Did you remember your password?</span>
      <Link to={LINK.LOGIN}>Try logging in</Link>
    </AuthPageWrapper>
  );
};
