import React, { ChangeEvent, ReactElement, useState } from 'react';

import s from './profilePage.module.css';

import { SuperButton } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { logOutUserThunk } from 'store/features/login/loginSlice';

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableSpan = React.memo(({ value, onChange }: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState<string>(value);

  const activateEditMode = (): void => {
    setEditMode(true);
    setTitle(value);
  };
  const activateViewMode = (): void => {
    setEditMode(false);
    onChange(title);
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <input value={title} onChange={changeTitle} onBlur={activateViewMode} />
  ) : (
    <span onDoubleClick={activateEditMode}>{value}</span>
  );
});

export const ProfilePage = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userEmail = useAppSelector(state => state.login.email);
  const publicCardPacksCount = useAppSelector(state => state.login.publicCardPacksCount);
  const dispatch = useAppDispatch();
  console.log(userName);
  console.log(userEmail);
  console.log(publicCardPacksCount);
  const [imgURL, setImgURL] = useState(
    'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png',
  );
  console.log(userName);
  console.log(setImgURL);

  const [value, setValue] = useState<string>(userName);
  console.log(value);

  const UpdateUserName = (title: string): void => setValue(title);
  const logOutHandler = (): void => {
    dispatch(logOutUserThunk());
  };

  return (
    <div>
      <div>Personal Information</div>
      <div>
        <img className={s.img} src={imgURL} alt="avatar" />
      </div>
      <div>
        Name:{' '}
        <EditableSpan
          value={userName}
          onChange={title => {
            UpdateUserName(title);
          }}
        />
        ✎
      </div>
      <div>Email:{`${userEmail}`}</div>
      <div>Количество созданных колод:{`${publicCardPacksCount}`}</div>
      <SuperButton onClick={logOutHandler}>LOGOUT</SuperButton>
    </div>
  );
};
