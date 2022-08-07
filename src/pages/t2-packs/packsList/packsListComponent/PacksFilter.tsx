import * as React from 'react';
import { ReactElement, useState } from 'react';

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
  const [check, setCheck] = useState<boolean>(false);
  const handleCheck = (set: boolean): void => {
    if (profileId != null) {
      const userId: string | null = set ? profileId : null;
      callback(userId);
      setCheck(set);
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
          variant={check ? 'contained' : 'outlined'}
          sx={{ width: '50%' }}
          onClick={() => handleCheck(true)}
        >
          My
        </Button>
        <Button
          variant={check ? 'outlined' : 'contained'}
          sx={{ width: '50%' }}
          onClick={() => handleCheck(false)}
        >
          All
        </Button>
      </ButtonGroup>
    </Box>
  );
};
