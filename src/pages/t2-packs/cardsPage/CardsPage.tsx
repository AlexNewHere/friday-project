import { ReactElement, useEffect } from 'react';
import * as React from 'react';

import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { getCardsThunk } from 'store/features/Cards/card/cardsAsyncThunk';

export const CardsPage = (): ReactElement => {
  const cards = useAppSelector(state => state.cards.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCardsThunk());
  }, []);

  return (
    <Container sx={{ paddingTop: '120px' }}>
      <div>Back to Packs List</div>
      <div>Name Pack</div>
      <div>Search</div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: '#EFEFEF' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Question</TableCell>
              <TableCell align="right">Answer</TableCell>
              <TableCell align="right">Last Updated</TableCell>
              <TableCell align="right">Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map(card => (
              <TableRow
                key={card._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {card.question}
                </TableCell>
                <TableCell align="right">{card.answer}</TableCell>
                <TableCell align="right">{card.updated}</TableCell>
                <TableCell align="right">{card.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
