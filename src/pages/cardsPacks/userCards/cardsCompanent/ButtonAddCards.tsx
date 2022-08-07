import React, { ChangeEvent, ReactElement, useState } from 'react';

import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import style from './buttonCards.module.scss';

import { CardCreateType } from 'api';
import { ModalWindow } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { createCardsThunk, getCardsThunk } from 'store';

type PropsType = {
  packName: string;
  packId: string;
};

export const ButtonAddCards = ({ packName, packId }: PropsType): ReactElement => {
  const { page, pageCount } = useAppSelector(state => state.cards);
  const [open, setOpen] = useState<boolean>(false);
  const [select, setSelect] = useState<string>('');
  const [params, setParams] = useState<CardCreateType>({
    question: '',
    answer: '',
  });
  const dispatch = useAppDispatch();
  const handleNewCard = (): void => {
    setOpen(!open);
  };

  const handleCreateCard = async (): Promise<void> => {
    const res = await dispatch(createCardsThunk({ ...params, packId }));
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
      <Button onClick={handleNewCard} variant="contained">
        Add new card
      </Button>
      <ModalWindow open={open} onClose={handleNewCard} name="Add new card">
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
              onClick={handleNewCard}
              sx={{ border: 'none' }}
              color="inherit"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={handleCreateCard} variant="contained">
              Create
            </Button>
          </Box>
        </Box>
      </ModalWindow>
    </Box>
  );
};
