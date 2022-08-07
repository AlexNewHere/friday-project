import * as React from 'react';
import { ReactElement, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useNavigate } from 'react-router-dom';

import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { RemoveIcon, EditIcon, StartTest } from 'pages';
import { getCardsThunk } from 'store';

type PropsType = {
  sortPacks: string | null;
  callback: (sortPacks: string | null) => void;
};

export const PacksTable = ({ sortPacks, callback }: PropsType): ReactElement => {
  const packs = useAppSelector(state => state.packs.cardPacks);
  const { page, pageCount } = useAppSelector(state => state.cards);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [sort, setSort] = useState<string | null>(sortPacks);
  const handleOpenPack = async (packId: string, packName: string): Promise<void> => {
    const res = await dispatch(
      getCardsThunk({ params: { page, pageCount, cardsPack_id: packId }, packName }),
    );
    if (res) {
      navigate(`${LINK.CARDS}/${packId}`);
    }
  };
  const handleSort = (): void => {
    if (sort === null) {
      setSort('1updated');
      callback('1updated');
    } else {
      setSort(null);
      callback(null);
    }
  };
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="packs table">
          <TableHead sx={{ background: '#EFEFEF' }}>
            <TableRow>
              <TableCell sx={{ width: '40%' }}>Name</TableCell>
              <TableCell sx={{ width: '15%' }} align="left">
                Cards
              </TableCell>
              <TableCell align="left">
                Last Updated
                <TableSortLabel
                  active
                  direction={sort ? 'asc' : 'desc'}
                  onClick={handleSort}
                />
              </TableCell>
              <TableCell align="left">Created by</TableCell>
              <TableCell sx={{ width: '12%' }} align="left">
                Actions
              </TableCell>
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
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <RemoveIcon
                      userId={pack.user_id}
                      packId={pack._id}
                      packName={pack.name}
                    />
                    <EditIcon
                      userId={pack.user_id}
                      packName={pack.name}
                      packId={pack._id}
                    />
                    <StartTest />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
