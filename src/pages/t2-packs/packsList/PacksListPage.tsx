import * as React from 'react';
import { ReactElement, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { PaginationRow, SearchInput } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { PacksListHeader, PacksFilter, PacksSlider, PacksTable } from 'pages';
import { getPacksThunk } from 'store';

export const PacksListPage = (): ReactElement => {
  const params = useAppSelector(state => state.params);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPacksThunk());
  }, [params]);
  return (
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
};
