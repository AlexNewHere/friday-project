import * as React from 'react';
import { ReactElement, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { PaginationRow } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { getPacksThunk } from 'store';

export const PacksTable = (): ReactElement => {
  const packs = useAppSelector(state => state.packs.cardPacks);
  const params = useAppSelector(state => state.params);
  const dispatch = useAppDispatch();
  const startMin = 2;
  const startMax = 10;
  const [value, setValue] = React.useState<number[]>([startMin, startMax]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };

  useEffect(() => {
    dispatch(getPacksThunk());
  }, [params]);

  return (
    <Container sx={{ paddingTop: '120px' }}>
      <Grid container spacing={3} sx={{ w: '100%', my: '24px' }}>
        <Grid item xs>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              mb: '8px',
            }}
          >
            Search
          </Typography>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
          >
            <InputBase
              sx={{ p: 1, flex: 1 }}
              placeholder="Provide your text"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              mb: '8px',
            }}
          >
            Show packs cards
          </Typography>
          <ButtonGroup variant="contained" sx={{ width: '100%' }}>
            <Button sx={{ width: '50%' }}>My</Button>
            <Button sx={{ width: '50%' }}>All</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={5}>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '14px',
              mb: '8px',
            }}
          >
            Number of cards
          </Typography>
          <Slider
            getAriaLabel={() => 'Number of cards'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
          />
        </Grid>
      </Grid>
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
