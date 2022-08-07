import React, { ReactElement } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { GradeRating } from 'components';
import { useAppSelector } from 'hooks/useTypeHooks';

export const CardsTable = (): ReactElement => {
  const cards = useAppSelector(state => state.cards.cards);
  const packUserId = useAppSelector(state => state.cards.packUserId);
  const userId = useAppSelector(state => state.login._id);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: '#EFEFEF' }}>
          <TableRow>
            <TableCell sx={{ width: '35%' }} align="left">
              Question
            </TableCell>
            <TableCell sx={{ width: '30%' }} align="left">
              Answer
            </TableCell>
            <TableCell align="left">Last Updated</TableCell>
            <TableCell align="left">Grade</TableCell>
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
              <TableCell align="left">{card.question}</TableCell>
              <TableCell align="left">
                {card.updated.split('T')[0].split('-').reverse().join('.')}
              </TableCell>
              <TableCell align="left">
                <GradeRating grade={card.grade} />
                {packUserId === userId && <span>555</span>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
