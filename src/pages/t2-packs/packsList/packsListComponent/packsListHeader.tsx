import React, { ChangeEvent, ReactElement, useState } from 'react';

import { FormControlLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { ModalWindow } from 'components';
import { useAppDispatch } from 'hooks/useTypeHooks';
import { createPacksThunk } from 'store';

export const PacksListHeader = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const addNewPackHandle = (): void => {
    setOpen(!open);
  };
  const handleCheck = (): void => {
    setCheck(!check);
  };
  const handleName = (value: ChangeEvent<HTMLInputElement>): void => {
    setName(value.target.value);
  };
  const handleCreate = async (): Promise<void> => {
    const res = await dispatch(createPacksThunk({ name, private: check }));
    if (res) {
      setOpen(false);
    }
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '22px',
          lineHeight: '27px',
        }}
      >
        Packs list
      </Typography>
      <Button
        variant="contained"
        onClick={addNewPackHandle}
        sx={{
          w: '175px',
          h: '36px',
          borderRadius: '30px',
          px: '28px',
          textTransform: 'none',
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
        }}
      >
        Add new pack
      </Button>
      <ModalWindow open={open} onClose={addNewPackHandle} name="Add new pack">
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
              onClick={addNewPackHandle}
              sx={{ border: 'none' }}
              color="inherit"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={handleCreate} variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </ModalWindow>
    </Box>
  );
};
