import * as React from 'react';
import { ReactElement } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { PacksFilter } from 'pages/t2-packs/packsList/PacksFilter';
import { PacksSearch } from 'pages/t2-packs/packsList/PacksSearch';
import { PacksSlider } from 'pages/t2-packs/packsList/PacksSlider';
import { PacksTable } from 'pages/t2-packs/packsList/PacksTable';

export const PacksListPage = (): ReactElement => (
  <Container sx={{ paddingTop: '120px' }}>
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
