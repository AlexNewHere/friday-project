import React, { ReactElement } from 'react';

import { CircularProgress } from '@mui/material';

export const CircularInitialized = (): ReactElement => (
  <div
    style={{
      position: 'fixed',
      top: '30%',
      textAlign: 'center',
      width: '100%',
    }}
  >
    <CircularProgress />
  </div>
);
