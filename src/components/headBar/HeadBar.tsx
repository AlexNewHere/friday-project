import React, { ReactElement } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import { Developers, HeadProfile } from 'components';

export const HeadBar = (): ReactElement => (
  <AppBar position="absolute" color="inherit">
    <Container
      disableGutters
      sx={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}
    >
      <Developers />
      <HeadProfile />
    </Container>
  </AppBar>
);
