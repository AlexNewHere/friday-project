import React, { ReactElement } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

type BackToPacksListArrowPropsType = {
  name: string;
  link: string;
};

export const BackToNameArrow = React.memo(
  ({ name, link }: BackToPacksListArrowPropsType): ReactElement => {
    const navigate = useNavigate();
    const onClickHandler = (): void => {
      navigate(link);
    };
    return (
      <Box component="div" sx={{ zIndex: 2000 }}>
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            cursor: 'pointer',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '24px',
          }}
          onClick={onClickHandler}
        >
          <ArrowBackIcon style={{ marginRight: '12px' }} />
          Back to {name}
        </Typography>
      </Box>
    );
  },
);
