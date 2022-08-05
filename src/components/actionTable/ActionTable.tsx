import React, { ReactElement } from 'react';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Box from '@mui/material/Box';

export const ActionTable = (): ReactElement => (
  <Box sx={{ display: 'flex', alignItems: 'center', opacity: '0.6' }}>
    <DeleteForeverOutlinedIcon />
    <DriveFileRenameOutlineIcon />
    <SchoolOutlinedIcon />
  </Box>
);
