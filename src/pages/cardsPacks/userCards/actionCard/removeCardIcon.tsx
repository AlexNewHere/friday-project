import React, { ReactElement, useState } from 'react';

import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { ModalWindow } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { getCardsThunk, removeCardsThunk } from 'store';

type PropsType = {
  cardId: string;
  cardName: string;
  packName: string;
  packId: string;
};

export const RemoveCardIcon = ({
  cardId,
  cardName,
  packName,
  packId,
}: PropsType): ReactElement => {
  const { page, pageCount } = useAppSelector(state => state.cards);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleRemove = async (): Promise<void> => {
    const res = await dispatch(removeCardsThunk({ cardId }));
    if (res) {
      setOpen(false);
      dispatch(
        getCardsThunk({
          params: { page, pageCount, cardsPack_id: packId },
          packName,
        }),
      );
    }
  };
  return (
    <Box>
      <IconButton onClick={handleOpen} size="small" color="warning">
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
              Do you really want to remove
              <strong> {cardName}</strong>? All cards will be deleted.
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
