import * as React from 'react';
import { ReactElement } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

import { useAppSelector } from 'hooks/useTypeHooks';

type PropsType = {
  callback: (userId: string | null) => void;
};

export const PacksFilter = ({ callback }: PropsType): ReactElement => {
  const profileId = useAppSelector(state => state.login._id);
  const paramsId = useAppSelector(state => state.params.user_id);
  const handleCheck = (set: boolean): void => {
    if (profileId != null) {
      const userId: string | null = set ? profileId : null;
      callback(userId);
    }
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
        Show packs cards
      </Typography>
      <ButtonGroup color="primary" variant="outlined" sx={{ width: '100%' }}>
        <Button
          value="My"
          variant={paramsId ? 'contained' : 'outlined'}
          sx={{ width: '50%' }}
          onClick={() => handleCheck(true)}
        >
          My
        </Button>
        <Button
          variant={paramsId ? 'outlined' : 'contained'}
          sx={{ width: '50%' }}
          onClick={() => handleCheck(false)}
        >
          All
        </Button>
      </ButtonGroup>
    </Box>
  );
};
