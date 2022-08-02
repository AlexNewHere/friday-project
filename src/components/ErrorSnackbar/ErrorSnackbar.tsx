import React, { ReactElement } from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { setResponse } from 'store';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export const ErrorSnackbar = (): ReactElement => {
  const error = useAppSelector(state => state.fetch.error);

  const dispatch = useAppDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setResponse({ error: null }));
  };

  return (
    <Snackbar open={error !== null} autoHideDuration={2000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={error ? 'error' : 'success'}
        sx={{ width: '100%' }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
};
