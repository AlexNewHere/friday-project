import { ReactElement } from 'react';
import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import style from './cardStyle.module.scss';

import { BackToNameArrow } from 'components';
import { LINK } from 'enums';
import { useAppSelector } from 'hooks/useTypeHooks';
import { ButtonAddCards, CardsTable } from 'pages';

export const CardsPage = (): ReactElement => {
  const packName = useAppSelector(state => state.cards.packName);
  const packId = useAppSelector(state => state.cards.packId);
  const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount);
  const packUserId = useAppSelector(state => state.cards.packUserId);
  const userId = useAppSelector(state => state.login._id);

  return (
    <Container className={style.container}>
      <BackToNameArrow name="Packs List" link={LINK.PACKS} />
      <Box className={style.pack}>
        <Typography className={style.name_pack}>{packName}</Typography>
        {packUserId !== userId ||
          (cardsTotalCount >= 1 && (
            <ButtonAddCards packId={packId} packName={packName} />
          ))}
      </Box>
      {packUserId !== userId || cardsTotalCount >= 1 ? (
        <CardsTable />
      ) : (
        <Box className={style.empty_box}>
          <Typography className={style.empty_name}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Typography align="center">
            <ButtonAddCards packId={packId} packName={packName} />
          </Typography>
        </Box>
      )}
    </Container>
  );
};
