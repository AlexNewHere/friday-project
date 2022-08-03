import * as React from 'react';
import { ReactElement } from 'react';

import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export const PacksSlider = (): ReactElement => {
  const startMin = 2;
  const startMax = 10;
  const [value, setValue] = React.useState<number[]>([startMin, startMax]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };

  return (
    <Container>
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
      <Slider
        getAriaLabel={() => 'Number of cards'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </Container>
  );
};
