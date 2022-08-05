import * as React from 'react';
import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

export const PacksFilter = (): ReactElement => (
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
      Show packs cards
    </Typography>
    <ButtonGroup variant="contained" sx={{ width: '100%' }}>
      <Button sx={{ width: '50%' }}>My</Button>
      <Button sx={{ width: '50%' }}>All</Button>
    </ButtonGroup>
  </Box>
);
