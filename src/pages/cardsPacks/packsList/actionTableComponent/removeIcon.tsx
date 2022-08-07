import React, { ReactElement, useState } from 'react';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { ModalWindow } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { removePacksThunk } from 'store';

type PropsType = {
  userId: string;
  packId: string;
};

export const RemoveIcon = ({ userId, packId }: PropsType): ReactElement => {
  const profileId = useAppSelector(state => state.login._id);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleRemove = async (): Promise<void> => {
    const res = await dispatch(removePacksThunk(packId));
    if (res) {
      setOpen(false);
    }
  };
  return (
    <Box>
      <IconButton
        onClick={handleOpen}
        disabled={userId !== profileId}
        size="small"
        color="warning"
      >
        <DeleteForeverOutlinedIcon />
      </IconButton>
      <ModalWindow open={open} onClose={handleOpen} name="Delete pack">
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '35px 24px 15px',
              gap: '20px',
            }}
          >
            <span>
              Do you really want to remove Pack Name? All cards will be deleted.
            </span>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={handleOpen}
              sx={{ border: 'none' }}
              color="inherit"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={handleRemove} color="warning" variant="contained">
              Delete
            </Button>
          </Box>
        </Box>
      </ModalWindow>
    </Box>
  );
};
