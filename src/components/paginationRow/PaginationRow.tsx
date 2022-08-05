import React, { ReactElement, ChangeEvent, useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { setParams } from 'store';

export const PaginationRow = (): ReactElement => {
  const count = useAppSelector(state => state.packs.cardPacksTotalCount);
  const pageCount = useAppSelector(state => state.params.pageCount);
  const page = useAppSelector(state => state.params.page);
  const params = useAppSelector(state => state.params);
  const userId = useAppSelector(state => state.params.userId);
  const dispatch = useAppDispatch();
  const [stateParams, setStateParams] = useState<{ page: string; pageCount: string }>({
    page,
    pageCount,
  });
  const numberPage: number = Math.ceil(count / +pageCount);

  useEffect(() => {
    dispatch(
      setParams({
        ...params,
        page: stateParams.page,
        pageCount: stateParams.pageCount,
        userId,
      }),
    );
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
      <FormControl size="small" sx={{ padding: '0 10px' }}>
        <Select
          value={stateParams.pageCount}
          onChange={handleSelect}
          SelectDisplayProps={{
            style: { padding: '5px 10px', marginRight: '20px' },
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <span>Cards per Page</span>
    </Box>
  );
};
