import * as React from 'react';
import { ReactElement } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { LINK } from 'enums';

export const NewPackPage = (): ReactElement => {
  const navigate = useNavigate();
  const toPacksListHandler = (): void => {
    navigate(LINK.PACKS);
  };
  const addNewCardHandle = (): void => {
    navigate(LINK.PACKS); // THIS HANDLER (to replace) TO ADD A CARD!!!
  };
  return (
    <Container sx={{ paddingTop: '120px' }}>
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          cursor: 'pointer',
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '24px',
        }}
        onClick={toPacksListHandler}
      >
        <ArrowBackIcon style={{ marginRight: '12px' }} />
        Back to Packs List
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '27px',
          mt: '27px',
          mb: '86px',
        }}
      >
        Name Pack
        <EditIcon
          sx={{
            ml: '15px',
          }}
        />
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '20px',
          opacity: 0.5,
          textAlign: 'center',
        }}
      >
        This pack is empty. Click add new card to fill this pack
      </Typography>
      <Typography align="center">
        <Button
          variant="contained"
          onClick={addNewCardHandle}
          sx={{
            w: '175px',
            h: '36px',
            borderRadius: '30px',
            px: '28px',
            mt: '32px',
            textTransform: 'none',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          Add new card
        </Button>
      </Typography>
    </Container>
  );
};
