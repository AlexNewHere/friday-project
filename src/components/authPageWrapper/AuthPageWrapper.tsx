import React, { ReactElement } from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { PaperProps } from '@mui/material/Paper/Paper';

import style from './AuthPageWrapper.module.scss';

export const AuthPageWrapper = (props: PaperProps): ReactElement => (
  <Container
    fixed
    style={{ display: 'flex', justifyContent: 'center', paddingTop: '120px' }}
  >
    <Paper className={style.wrapper} elevation={2} {...props} />
  </Container>
);
