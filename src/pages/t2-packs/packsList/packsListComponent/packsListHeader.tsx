import React, { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { LINK } from 'enums';

export const PacksListHeader = (): ReactElement => {
  const navigate = useNavigate();
  const addNewPackHandle = (): void => {
    navigate(LINK.NEWPACK);
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '27px',
        }}
      >
        Packs list
      </Typography>
      <Button
        variant="contained"
        onClick={addNewPackHandle}
        sx={{
          w: '175px',
          h: '36px',
          borderRadius: '30px',
          px: '28px',
          textTransform: 'none',
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
        }}
      >
        Add new pack
      </Button>
    </Box>
  );
};
