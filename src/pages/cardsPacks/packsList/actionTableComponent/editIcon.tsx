import React, { ChangeEvent, ReactElement, useState } from 'react';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import { ModalWindow } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { editPacksThunk } from 'store';

type PropsType = {
  userId: string;
  packName: string;
  packId: string;
};

export const EditIcon = ({ userId, packName, packId }: PropsType): ReactElement => {
  const profileId = useAppSelector(state => state.login._id);
  const [open, setOpen] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [name, setName] = useState<string>(packName);
  const dispatch = useAppDispatch();
  const handleOpenEdit = (): void => {
    setOpen(!open);
  };
  const handleCheck = (): void => {
    setCheck(!check);
  };
  const handleName = (value: ChangeEvent<HTMLInputElement>): void => {
    setName(value.target.value);
  };
  const handleEdit = async (): Promise<void> => {
    const res = await dispatch(editPacksThunk({ _id: packId, name }));
    if (res) {
      setOpen(false);
    }
  };
  return (
    <Box>
      <IconButton
        onClick={handleOpenEdit}
        disabled={userId !== profileId}
        size="small"
        color="primary"
      >
        <DriveFileRenameOutlineIcon />
      </IconButton>
      <ModalWindow open={open} onClose={handleOpenEdit} name="Edit pack">
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
            <TextField
              value={name}
              onChange={handleName}
              label="Name pack"
              fullWidth
              variant="standard"
            />
            <FormControlLabel
              control={<Checkbox checked={check} onChange={handleCheck} name="private" />}
              label="Private pack"
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={handleOpenEdit}
              sx={{ border: 'none' }}
              color="inherit"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={handleEdit} variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </ModalWindow>
    </Box>
  );
};
