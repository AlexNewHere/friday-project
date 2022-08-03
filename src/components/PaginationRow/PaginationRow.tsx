import React, { ReactElement, ChangeEvent } from 'react';

import { Pagination } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { setParams } from 'store';

export const PaginationRow = (): ReactElement => {
  const count = useAppSelector(state => state.packs.cardPacksTotalCount);
  const pageCount = useAppSelector(state => state.packs.pageCount);
  const dispatch = useAppDispatch();

  const numberPage: number = Math.ceil(count / pageCount);

  const handleChangePage = (event: ChangeEvent<unknown> | null, value: number): void => {
    dispatch(setParams(value.toString()));
  };
  return (
    <div style={{ paddingTop: '36px' }}>
      <Pagination
        count={numberPage}
        shape="rounded"
        color="primary"
        onChange={handleChangePage}
      />
    </div>
  );
};
