import * as React from 'react';
import { ReactElement } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const PacksSearch = (): ReactElement => (
  <Container>
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
        sx={{ p: 1, flex: 1 }}
        placeholder="Provide your text"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  </Container>
);
