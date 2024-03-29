import * as yup from 'yup';

import { VALID } from 'enums';

export const registerFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email required'),
  password: yup
    .string()
    .min(
      VALID.PASSWORD_LENGTH,
      `Password must be more than ${VALID.PASSWORD_LENGTH - 1} characters`,
    )
    .required('Password required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords doesn't match")
    .required('Required'),
});

export const loginFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
  password: yup
    .string()
    .min(
      VALID.PASSWORD_LENGTH,
      `Password must be more than ${VALID.PASSWORD_LENGTH - 1} characters`,
    )
    .required('Password required'),
});

export const forgotFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
});

export const createNewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(
      VALID.PASSWORD_LENGTH,
      `Password must be more than ${VALID.PASSWORD_LENGTH - 1} characters`,
    )
    .required('Password required'),
});
