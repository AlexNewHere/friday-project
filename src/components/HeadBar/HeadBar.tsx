import React, { ReactElement } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton } from '@mui/material';

import { LogInOutButton } from 'components';

export const HeadBar = (): ReactElement => (
  <AppBar position="absolute" color="inherit">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <LogInOutButton />
    </Toolbar>
  </AppBar>
);
