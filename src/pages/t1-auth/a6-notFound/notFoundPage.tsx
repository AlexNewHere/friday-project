import React, { ReactElement } from 'react';

import Box from '@mui/material/Box';

import error404 from 'assets/logo/error404.png';

export const NotFoundPage = (): ReactElement => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
    }}
  >
    <img src={error404} alt="page404" style={{ width: '100%' }} />
  </Box>
);
