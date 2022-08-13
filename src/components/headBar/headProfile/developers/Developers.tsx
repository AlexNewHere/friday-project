import React, { ReactElement } from 'react';

import Box from '@mui/material/Box';

import { Developer } from 'components';

export const Developers = (): ReactElement => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ mr: '5px', fontFamily: 'Montserrat, sans-serif' }}>Developer team:</Box>
    <Developer
      name="Alexei Boiko"
      avatar="https://github.com/AlexNewHere.png"
      github="https://github.com/AlexNewHere"
      linkedin="https://www.linkedin.com/in/alexboiko/"
    />
    <Developer
      name="Anton Rybakou"
      avatar="https://github.com/ToshaBY.png"
      github="https://github.com/ToshaBY"
      linkedin="https://www.linkedin.com/in/antonrybakov/"
    />
    <Developer
      name="Evgeny Sychev"
      avatar="https://github.com/EvgenySychev.png"
      github="https://github.com/EvgenySychev"
      linkedin="https://www.linkedin.com/in/EvgenySychev/"
    />
  </Box>
);
