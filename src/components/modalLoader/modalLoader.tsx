import React, { ReactElement } from 'react';

import { Modal, CircularProgress } from '@mui/material';

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
    >
      <CircularProgress color="secondary" />
    </Modal>
  );
};
