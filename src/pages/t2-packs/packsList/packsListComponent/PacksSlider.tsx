import * as React from 'react';
import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { setParams } from 'store';

export const PacksSlider = (): ReactElement => {
  const startMin = useAppSelector(state => state.params.min);
  const startMax = useAppSelector(state => state.params.max);
  const [value, setValue] = React.useState<number[]>([startMin, startMax]);
  const params = useAppSelector(state => state.params);
  const dispatch = useAppDispatch();
  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };
  const handleSubmit = (): void => {
    dispatch(setParams({ ...params, min: value[0], max: value[1] }));
  };
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14px',
          mb: '8px',
        }}
      >
        Number of cards
      </Typography>
      <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <TextField
          type="text"
          fullWidth
          value={value[0]}
          sx={{
            width: '60px',
            bgcolor: 'white',
            fontSize: '16px',
          }}
          inputProps={{
            style: {
              fontSize: '16px',
              height: '28px',
              padding: '5px',
              textAlign: 'center',
            },
          }}
        />
        <Slider
          getAriaLabel={() => 'Number of cards'}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleSubmit}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          disableSwap
        />
        <TextField
          type="text"
          fullWidth
          value={value[1]}
          sx={{
            width: '60px',
            bgcolor: 'white',
            fontSize: '16px',
          }}
          inputProps={{
            style: {
              fontSize: '16px',
              height: '28px',
              padding: '5px',
              textAlign: 'center',
            },
          }}
        />
      </Box>
    </Box>
  );
};
