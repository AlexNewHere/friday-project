import * as React from 'react';
import { ReactElement } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { PacksFilter } from './PacksFilter';

import { LINK } from 'enums';
import { PacksSearch } from 'pages/t2-packs/packsList/PacksSearch';
import { PacksSlider } from 'pages/t2-packs/packsList/PacksSlider';
import { PacksTable } from 'pages/t2-packs/packsList/PacksTable';

export const PacksListPage = (): ReactElement => {
  const navigate = useNavigate();
  const addNewPackHandle = (): void => {
    navigate(LINK.NEWPACK);
  };
  return (
    <Container sx={{ paddingTop: '120px' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>Packs list</Typography>
        <Button
          variant="contained"
          onClick={addNewPackHandle}
          sx={{ w: '175px', h: '36px', borderRadius: '30px' }}
        >
          Add new pack
        </Button>
      </Container>
      <Grid container spacing={2} sx={{ w: '100%', my: '24px' }}>
        <Grid item xs>
          <PacksSearch />
        </Grid>
        <Grid item xs={3}>
          <PacksFilter />
        </Grid>
        <Grid item xs={4}>
          <PacksSlider />
        </Grid>
      </Grid>
      <PacksTable />
    </Container>
  );
};
