import * as React from 'react';
import { ReactElement, useEffect } from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { PaginationRow } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { getPacksThunk } from 'store';

export const PacksTable = (): ReactElement => {
  const packs = useAppSelector(state => state.packs.cardPacks);
  const params = useAppSelector(state => state.params);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPacksThunk());
  }, [params]);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: '#EFEFEF' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Cards</TableCell>
              <TableCell align="right">Last Updated</TableCell>
              <TableCell align="right">Created by</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packs.map(pack => (
              <TableRow
                key={pack._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {pack.name}
                </TableCell>
                <TableCell align="right">{pack.cardsCount}</TableCell>
                <TableCell align="right">{pack.updated}</TableCell>
                <TableCell align="right">{pack.user_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationRow />
    </Container>
  );
};
