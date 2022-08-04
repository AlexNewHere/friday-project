import { ReactElement } from 'react';
import * as React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { LINK } from 'enums';
import { useAppSelector } from 'hooks/useTypeHooks';

export const CardsPage = (): ReactElement => {
  const navigate = useNavigate();
  const toPacksListHandler = (): void => {
    navigate(LINK.PACKS);
  };
  const cards = useAppSelector(state => state.cards.cards);

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
        <ArrowBackIcon style={{ marginRight: '12px' }} />
        Back to Packs List
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
        Name Pack
      </Typography>
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
