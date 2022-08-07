import React, { ReactElement } from 'react';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import IconButton from '@mui/material/IconButton';

export const StartTest = (): ReactElement => (
  <IconButton size="small" color="success">
    <SchoolOutlinedIcon />
  </IconButton>
);
