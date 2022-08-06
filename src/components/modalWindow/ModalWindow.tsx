import React, { FC, ReactElement } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { ModalProps } from '@mui/material/Modal/Modal';
import Paper from '@mui/material/Paper';

import scss from './ModalStyle.module.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 395,
  bgcolor: 'background.paper',
  border: '1px solid rgba(126, 126, 126, 0.8)',
};

type ModalType = {
  name: string;
  onClose: () => void;
};

export const ModalWindow: FC<ModalProps & ModalType> = ({
  open,
  onClose,
  name,
  children,
}): ReactElement => (
  <Modal open={open} disableScrollLock disableAutoFocus>
    <Paper sx={style}>
      <Box className={scss.header}>
        <h3>{name}</h3>
        <IconButton>
          <CloseIcon onClick={onClose} />
        </IconButton>
      </Box>
      <Box className={scss.body}> {children}</Box>
    </Paper>
  </Modal>
);
