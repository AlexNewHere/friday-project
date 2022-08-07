import { ReactElement, useEffect, useState } from 'react';
import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { CardsTable } from './CardsTable';

import { BackToNameArrow, PaginationRow } from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { CardsParamsTypes, getCardsThunk } from 'store';

export const CardsPage = (): ReactElement => {
  const packName = useAppSelector(state => state.cards.packName);
  const packId = useAppSelector(state => state.cardsParams.cardsPack_id);
  const count = useAppSelector(state => state.cards.cardsTotalCount);
  const allCardsParams = useAppSelector(state => state.cardsParams);
  const [cardsParams, setCardsParams] = useState<CardsParamsTypes>(allCardsParams);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toPacksListHandler = (): void => {
    navigate(LINK.PACKS);
  };

  useEffect(() => {
    dispatch(getCardsThunk({ packId, packName, cardsParams }));
  }, [cardsParams.page, cardsParams.pageCount]);

  const handlePagination = (page: number, pageCount: number): void => {
    setCardsParams({ ...cardsParams, page, pageCount, cardsPack_id: packId });
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
        <BackToNameArrow name="Packs List" link={LINK.PROFILE} />
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
        {packName}
      </Typography>
      <CardsTable />
      <PaginationRow
        page={cardsParams.page}
        count={count}
        pageCount={cardsParams.pageCount}
        callback={handlePagination}
      />
    </Container>
  );
};
