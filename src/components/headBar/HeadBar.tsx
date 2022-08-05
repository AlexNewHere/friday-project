import React, { ReactElement } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import { HeadProfile } from 'components';

export const HeadBar = (): ReactElement => (
  <AppBar position="absolute" color="inherit">
    <Container
      disableGutters
      sx={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 0' }}
    >
      <HeadProfile />
    </Container>
  </AppBar>
);
