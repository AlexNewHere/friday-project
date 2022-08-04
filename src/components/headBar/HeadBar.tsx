import React, { ReactElement } from 'react';

import { AppBar, Toolbar } from '@mui/material';

import { HeadProfile } from 'components/headBar/headProfile/HeadProfile';

export const HeadBar = (): ReactElement => (
  <AppBar position="absolute" color="inherit">
    <Toolbar>
      <HeadProfile />
    </Toolbar>
  </AppBar>
);
