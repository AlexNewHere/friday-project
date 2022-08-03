import React, { ReactElement, ChangeEvent, useState, useEffect } from 'react';

import {
  Box,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { setParams } from 'store';

export const PaginationRow = (): ReactElement => {
  const count = useAppSelector(state => state.packs.cardPacksTotalCount);
  const pageCount = useAppSelector(state => state.params.pageCount);
  const page = useAppSelector(state => state.params.page);
  const dispatch = useAppDispatch();
  const [stateParams, setStateParams] = useState<{ page: string; pageCount: string }>({
    page,
    pageCount,
  });
  const numberPage: number = Math.ceil(count / +pageCount);

  useEffect(() => {
    dispatch(setParams({ ...stateParams }));
  }, [stateParams]);

  const handleChangePage = (event: ChangeEvent<unknown> | null, value: number): void => {
    setStateParams({ ...stateParams, page: value.toString() });
  };
  const handleSelect = (event: SelectChangeEvent): void => {
    setStateParams({ ...stateParams, pageCount: event.target.value.toString() });
  };
  return (
    <Box sx={{ padding: '36px 0', display: 'flex', alignItems: 'center' }}>
      <Pagination
        page={+page}
        count={numberPage}
        shape="rounded"
        color="primary"
        onChange={handleChangePage}
      />
      <span>Show</span>
      <FormControl size="small">
        <Select value={stateParams.pageCount} onChange={handleSelect}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <span>Cards per Page</span>
    </Box>
  );
};
