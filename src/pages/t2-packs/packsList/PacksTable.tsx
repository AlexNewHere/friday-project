import * as React from 'react';
import { ReactElement, useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { getPacksThunk, getCardsThunk } from 'store';

export const PacksTable = (): ReactElement => {
  const packs = useAppSelector(state => state.packs.cardPacks);
  const params = useAppSelector(state => state.params);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOpenPack = (packId: string): void => {
    dispatch(getCardsThunk(packId));
    navigate(LINK.CARDS);
  };
  useEffect(() => {
    dispatch(getPacksThunk());
  }, [params]);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: '#EFEFEF' }}>
            <TableRow>
              <TableCell size="medium">Name</TableCell>
              <TableCell align="left">Cards</TableCell>
              <TableCell align="left">Last Updated</TableCell>
              <TableCell align="left">Created by</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packs.map(pack => (
              <TableRow
                key={pack._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box onClick={() => handleOpenPack(pack._id)}>{pack.name}</Box>
                </TableCell>
                <TableCell align="left">{pack.cardsCount}</TableCell>
                <TableCell align="left">{pack.updated}</TableCell>
                <TableCell align="left">{pack.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
