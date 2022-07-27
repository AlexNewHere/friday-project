import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableSpan = React.memo(({ value, onChange }: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(value);

  const activateEditMode = (): void => {
    setEditMode(true);
  };
  const activateViewMode = (): void => {
    setEditMode(false);
    onChange(title); // проверку на enter
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
    <input
      value={title}
      onChange={changeTitle}
      onKeyDown={onKeyPressHandler}
      onBlur={activateViewMode}
    />
  ) : (
    <span onDoubleClick={activateEditMode}>{value}</span>
  );
});
