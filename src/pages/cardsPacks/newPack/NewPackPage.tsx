import * as React from 'react';
import { ReactElement } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { BackToNameArrow } from 'components';
import { LINK } from 'enums';

export const NewPackPage = (): ReactElement => {
  const navigate = useNavigate();
  const addNewCardHandle = (): void => {
    navigate(LINK.PACKS); // THIS HANDLER (to replace) TO ADD A CARD!!!
  };
  return (
    <Container sx={{ paddingTop: '120px' }}>
      <BackToNameArrow name="Packs List" link={LINK.PACKS} />
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
