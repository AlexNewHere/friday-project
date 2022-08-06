import React, { ReactElement } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import style from './BackToNameArrow.module.scss';

type BackToPacksListArrowPropsType = {
  name: string;
  link: string;
};

export const BackToNameArrow = ({
  name,
  link,
}: BackToPacksListArrowPropsType): ReactElement => {
  const navigate = useNavigate();
  const onClickHandler = (): void => {
    navigate(link);
  };
  return (
    <Box className={style.text} sx={{ position: 'fixed', zIndex: 2000 }}>
      <Typography component="p" onClick={onClickHandler}>
        <ArrowBackIcon />
        Back to {name}
      </Typography>
    </Box>
  );
};
