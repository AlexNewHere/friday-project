import React, { ReactElement } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const CircularInitialized = (): ReactElement => (
  <Box
    style={{
      position: 'fixed',
      top: '30%',
      textAlign: 'center',
      width: '100%',
    }}
  >
    <CircularProgress />
  </Box>
);
