import * as React from 'react';
import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import { ActionTable } from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { getCardsThunk } from 'store';

export const PacksTable = (): ReactElement => {
  const packs = useAppSelector(state => state.packs.cardPacks);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOpenPack = async (packId: string, packName: string): Promise<void> => {
    const res = await dispatch(getCardsThunk({ packId, packName }));
    if (res) {
      navigate(LINK.CARDS);
    }
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: '#EFEFEF' }}>
            <TableRow>
              <TableCell sx={{ width: '35%' }}>Name</TableCell>
              <TableCell sx={{ width: '15%' }} align="left">
                Cards
              </TableCell>
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
                  <Box
                    onClick={() => handleOpenPack(pack._id, pack.name)}
                    sx={{
                      cursor: 'pointer',
                      width: 'fit-content',
                      '&:hover': { backgroundColor: '#e2f1ee' },
                    }}
                  >
                    {pack.name}
                  </Box>
                </TableCell>
                <TableCell align="left">{pack.cardsCount}</TableCell>
                <TableCell align="left">
                  {pack.updated.split('T')[0].split('-').reverse().join('.')}
                </TableCell>
                <TableCell align="left">{pack.user_name}</TableCell>
                <TableCell align="left">
                  <ActionTable />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
