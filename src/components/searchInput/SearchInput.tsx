import * as React from 'react';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useDebounce } from 'hooks/useDebounce';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { setParams } from 'store';

export const SearchInput = (): ReactElement => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value);
  const params = useAppSelector(state => state.params);
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  useEffect(() => {
    dispatch(setParams({ ...params, packName: debouncedValue }));
  }, [debouncedValue]);
  return (
    <Box>
      <FormControl variant="standard" sx={{ width: '100%' }}>
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
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <InputBase
            size="small"
            sx={{ padding: '5px', width: '100%' }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            inputProps={{
              style: { padding: '0' },
            }}
            placeholder="Provide your text"
            onChange={handleChange}
          />
        </Paper>
      </FormControl>
    </Box>
  );
};
