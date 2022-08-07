import * as React from 'react';
import { ReactElement } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from 'hooks/useTypeHooks';

export const CardsTable = (): ReactElement => {
  const cards = useAppSelector(state => state.cards.cards);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: '#EFEFEF' }}>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Answer</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell>Grade</TableCell>
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
              <TableCell>{card.answer}</TableCell>
              <TableCell>{card.updated}</TableCell>
              <TableCell>{card.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
