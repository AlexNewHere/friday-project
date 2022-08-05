import * as React from 'react';
import { ReactElement } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { PaginationRow, SearchInput } from 'components';
import { PacksListHeader, PacksFilter, PacksSlider } from 'pages';
import { PacksTable } from 'pages/t2-packs/packsList/PacksTable';

export const PacksListPage = (): ReactElement => (
  <Container sx={{ paddingTop: '120px' }} disableGutters>
    <PacksListHeader />
    <Grid container spacing={2} sx={{ w: '100%', my: '24px' }} gap={3}>
      <Grid item xs>
        <SearchInput />
      </Grid>
      <Grid item xs={2}>
        <PacksFilter />
      </Grid>
      <Grid item xs={3}>
        <PacksSlider />
      </Grid>
    </Grid>
    <PacksTable />
    <PaginationRow />
  </Container>
);
