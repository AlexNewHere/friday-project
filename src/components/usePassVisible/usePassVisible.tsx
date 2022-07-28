import React, { ReactElement, useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { IconButton } from '@mui/material';

export const usePassVisible = (): [string, ReactElement] => {
  const [visible, setVisible] = useState<string>('password');

  const toggleVisibility = (): void => {
    if (visible === 'password') {
      setVisible('text');
    } else {
      setVisible('password');
    }
  };

  const showPassword = (
    <IconButton onClick={() => toggleVisibility()}>
      {visible === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  );

  return [visible, showPassword];
};
