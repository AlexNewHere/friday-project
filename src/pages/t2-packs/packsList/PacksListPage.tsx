import * as React from 'react';
import { ReactElement, useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { PaginationRow, SearchInput } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { PacksListHeader, PacksFilter, PacksSlider, PacksTable } from 'pages';
import { getPacksThunk, ParamsType } from 'store';

export const PacksListPage = (): ReactElement => {
  const count = useAppSelector(state => state.packs.cardPacksTotalCount);
  const userParamsId = useAppSelector(state => state.params.user_id);
  const params = useAppSelector(state => state.params);
  const [allParams, setAllParams] = useState<ParamsType>(params);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPacksThunk(allParams));
  }, [allParams.pageCount, allParams.page, allParams.user_id]);

  const handleSort = (sortPacks: string | null): void => {
    setAllParams({ ...allParams, sortPacks, page: 1 });
  };

  const handleFilter = (userId: string | null): void => {
    setAllParams({ ...allParams, user_id: userId });
  };

  const handleSlider = (min: number, max: number): void => {
    setAllParams({ ...allParams, min, max });
  };

  const handlePagination = (page: number, pageCount: number): void => {
    setAllParams({ ...allParams, page, pageCount, user_id: userParamsId });
  };

  return (
    <Container sx={{ paddingTop: '120px' }} disableGutters>
      <PacksListHeader />
      <Grid container spacing={2} sx={{ w: '100%', my: '24px' }} gap={3}>
        <Grid item xs>
          <SearchInput />
        </Grid>
        <Grid item xs={2}>
          <PacksFilter callback={handleFilter} />
        </Grid>
        <Grid item xs={3}>
          <PacksSlider callback={handleSlider} min={allParams.min} max={allParams.max} />
        </Grid>
      </Grid>
      <PacksTable callback={handleSort} sortPacks={allParams.sortPacks} />
      <PaginationRow
        page={allParams.page}
        count={count}
        pageCount={allParams.pageCount}
        callback={handlePagination}
      />
    </Container>
  );
};
