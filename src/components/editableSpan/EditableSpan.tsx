import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

import { Button, TextField } from '@mui/material';

import { EditableSpanType } from 'components/editableSpan/EditableSpanType';

export const EditableSpan = React.memo(
  ({ value, onChange, name, withButton, titleButton }: EditableSpanType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(value);

    const activateEditMode = (): void => {
      setEditMode(true);
    };
    const activateViewMode = (): void => {
      setEditMode(false);
      onChange(title);
    };
    const changeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
      setTitle(e.currentTarget.value);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        activateViewMode();
      }
    };

    return editMode ? (
      <div>
        <TextField
          id="filled-hidden-label-small"
          variant="standard"
          size="small"
          label={name}
          value={title}
          onChange={changeTitle}
          onKeyDown={onKeyPressHandler}
          InputProps={{
            endAdornment: withButton ? (
              <Button variant="contained" size="small" onClick={activateViewMode}>
                {titleButton}
              </Button>
            ) : (
              ''
            ),
          }}
        />
      </div>
    ) : (
      <div>
        <div
          onDoubleClick={activateEditMode}
          style={{ fontSize: '20px', padding: '5px' }}
        >
          {value} ✎{' '}
        </div>
      </div>
    );
  },
);
