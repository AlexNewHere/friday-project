import * as React from 'react';
import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

type PropsType = {
  min: number;
  max: number;
  callback: (min: number, max: number) => void;
};

export const PacksSlider = ({ min, max, callback }: PropsType): ReactElement => {
  const [value, setValue] = React.useState<number[]>([min, max]);
  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };
  const handleSubmit = (): void => {
    callback(value[0], value[1]);
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
          max={30}
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
