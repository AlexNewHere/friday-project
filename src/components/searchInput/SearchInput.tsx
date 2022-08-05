import * as React from 'react';
import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const SearchInput = (): ReactElement => (
  <Box>
    <Typography
      sx={{
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        mb: '8px',
      }}
    >
      Search
    </Typography>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    >
      <InputBase
        size="small"
        sx={{ p: 1, flex: 1 }}
        placeholder="Provide your text"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Paper>
  </Box>
);
