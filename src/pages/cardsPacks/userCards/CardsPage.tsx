import { ReactElement, useEffect, useState } from 'react';
import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import { PackNameMenu } from './cardsComponents/PackNameMenu';
import style from './CardsPage.module.scss';

import { GetCardType } from 'api';
import { BackToNameArrow, PaginationRow } from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { ButtonAddCards, CardsTable } from 'pages';
import { getCardsThunk, setInitialCards } from 'store';

export const CardsPage = (): ReactElement => {
  const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount);
  const packUserId = useAppSelector(state => state.cards.packUserId);
  const userId = useAppSelector(state => state.login._id);
  const page = useAppSelector(state => state.cards.page);
  const pageCount = useAppSelector(state => state.cards.pageCount);
  const { packId, packName } = useParams();
  const dispatch = useAppDispatch();

  const packIdCurrent = packId !== undefined ? packId : '';

  const [allParams, setAllParams] = useState<GetCardType>({
    page,
    pageCount,
    cardsPack_id: packIdCurrent,
  });

  useEffect(() => {
    dispatch(getCardsThunk({ params: { ...allParams } }));
    return () => {
      dispatch(setInitialCards());
    };
  }, [allParams.page, allParams.pageCount]);

  const handlePagination = (pageCard: number, pageCountCard: number): void => {
    setAllParams({ ...allParams, page: pageCard, pageCount: pageCountCard });
  };

  return (
    <Container className={style.container}>
      <BackToNameArrow name="Packs List" link={LINK.PACKS} />
      <div className={style.pack}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography className={style.name_pack}>{packName}</Typography>
          <PackNameMenu />
        </Box>
        {packUserId !== userId ||
          (cardsTotalCount >= 1 && <ButtonAddCards packId={packIdCurrent} />)}
      </div>
      {packUserId !== userId || cardsTotalCount >= 1 ? (
        <div>
          <CardsTable />
          <PaginationRow
            page={allParams.page}
            pageCount={allParams.pageCount}
            count={cardsTotalCount}
            callback={handlePagination}
          />
        </div>
      ) : (
        <div className={style.empty_box}>
          <Typography className={style.empty_name}>
            This pack is empty. Click add new card to fill this pack
          </Typography>
          <Typography align="center">
            <ButtonAddCards packId={packIdCurrent} />
          </Typography>
        </div>
      )}
    </Container>
  );
};
