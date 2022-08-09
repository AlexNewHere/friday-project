import React, { ChangeEvent, ReactElement, useState } from 'react';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { CardCreateType } from 'api';
import { ModalWindow } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import style from 'pages/cardsPacks/userCards/cardsComponents/buttonCards.module.scss';
import { getCardsThunk, editCardsThunk } from 'store';

type PropsType = {
  cardId: string;
  question: string;
  answer: string;
  packId: string;
};

export const EditCardIcon = ({
  cardId,
  answer,
  question,
  packId,
}: PropsType): ReactElement => {
  const { page, pageCount } = useAppSelector(state => state.cards);
  const [open, setOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string>('');
  const [params, setParams] = useState<CardCreateType>({
    question,
    answer,
  });
  const dispatch = useAppDispatch();
  const handleOpenEdit = (): void => {
    setOpen(!open);
  };

  const handleEditCard = async (): Promise<void> => {
    const res = await dispatch(editCardsThunk({ ...params, cardId }));
    if (res) {
      setOpen(false);
      dispatch(
        getCardsThunk({
          params: { page, pageCount, cardsPack_id: packId },
        }),
      );
    }
  };

  const handleSelect = (e: SelectChangeEvent): void => {
    setSelect(e.target.value);
  };

  const handleQuestion = (e: ChangeEvent<HTMLInputElement>): void => {
    setParams({ ...params, question: e.target.value });
  };

  const handleAnswer = (e: ChangeEvent<HTMLInputElement>): void => {
    setParams({ ...params, answer: e.target.value });
  };

  return (
    <Box>
      <IconButton onClick={handleOpenEdit} size="small" color="primary">
        <DriveFileRenameOutlineIcon />
      </IconButton>
      <ModalWindow open={open} onClose={handleOpenEdit} name="Add new card">
        <Box>
          <Box className={style.body}>
            <Select
              SelectDisplayProps={{
                style: { padding: '10px 15px 6px' },
              }}
              value={select}
              size="small"
              fullWidth
              onChange={handleSelect}
            >
              <MenuItem value="text">Text</MenuItem>
            </Select>
            <TextField
              onChange={handleQuestion}
              value={params.question}
              type={select}
              label="Question"
              fullWidth
              variant="standard"
            />
            <TextField
              onChange={handleAnswer}
              value={params.answer}
              type={select}
              label="Answer"
              fullWidth
              variant="standard"
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
            <Button onClick={handleEditCard} variant="contained">
              SAVE
            </Button>
          </Box>
        </Box>
      </ModalWindow>
    </Box>
  );
};
