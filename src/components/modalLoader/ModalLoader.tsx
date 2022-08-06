import React, { ReactElement } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';

import { useAppSelector } from 'hooks/useTypeHooks';

export const ModalLoader = (): ReactElement => {
  const isFetching = useAppSelector(state => state.fetch.isFetching);

  return (
    <Modal
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
      hideBackdrop
      open={isFetching}
      disableAutoFocus
      disableScrollLock
    >
      <CircularProgress color="secondary" />
    </Modal>
  );
};
