import React, { ReactElement } from 'react';

import Paper from '@mui/material/Paper';

import style from './AuthPageWrapper.module.scss';

export const AuthPageWrapper = (props: any): ReactElement => (
  <Paper className={style.wrapper} elevation={4} {...props} />
);
