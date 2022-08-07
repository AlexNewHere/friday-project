import { ReactElement } from 'react';
import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import style from './cardStyle.module.scss';

import { BackToNameArrow } from 'components';
import { LINK } from 'enums';
import { useAppSelector } from 'hooks/useTypeHooks';
import { CardsTable } from 'pages/';

export const CardsPage = (): ReactElement => {
  const packName = useAppSelector(state => state.cards.packName);
  const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount);
  const packUserId = useAppSelector(state => state.cards.packUserId);
  const userId = useAppSelector(state => state.login._id);

  return (
    <Container className={style.container}>
      <BackToNameArrow name="Packs List" link={LINK.PACKS} />
      <Typography className={style.name_pack}>{packName}</Typography>
      {packUserId !== userId || cardsTotalCount > 1 ? (
        <CardsTable />
      ) : (
        <Box>
          <Typography className={style.empty_name}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Typography align="center">
            <Button variant="contained">Add new card</Button>
          </Typography>
        </Box>
      )}
    </Container>
  );
};
