import React, { ReactElement, ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type PropsType = {
  page: number;
  count: number;
  pageCount: number;
  callback: (page: number, pageCount: number) => void;
};

export const PaginationRow = ({
  callback,
  pageCount,
  count,
  page,
}: PropsType): ReactElement => {
  const numberPage: number = Math.ceil(count / +pageCount);
  const handleChangePage = (event: ChangeEvent<unknown> | null, value: number): void => {
    callback(value, pageCount);
  };
  const handleSelect = (event: SelectChangeEvent): void => {
    callback(page, +event.target.value);
  };

  return (
    <Box sx={{ padding: '36px 0', display: 'flex', alignItems: 'center' }}>
      <Pagination
        page={page}
        count={numberPage}
        shape="rounded"
        color="primary"
        onChange={handleChangePage}
      />
      <span>Show</span>
      <FormControl size="small" sx={{ padding: '0 10px' }}>
        <Select
          value={pageCount.toString()}
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
