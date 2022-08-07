import React, { ReactElement } from 'react';

import Rating from '@mui/material/Rating';

type PropType = {
  grade: number;
};

export const GradeRating = ({ grade }: PropType): ReactElement => (
  // const text: string = 'Привет';
  <Rating value={grade} />
);
