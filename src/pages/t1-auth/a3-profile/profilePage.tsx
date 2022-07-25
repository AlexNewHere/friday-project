import React, { ChangeEvent, ReactElement, useState } from 'react';

import s from './profilePage.module.css';

import { SuperButton } from 'components';
import { useAppSelector } from 'hooks/useTypeHooks';

type EditableSpanPropsType = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.value);

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(props.value);
  };
  const activateViewMode = () => {
    setEditMode(false);
    props.onChange(title);
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return editMode ? (
    <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
  ) : (
    <span onDoubleClick={activateEditMode}>{props.value}</span>
  );
});

export const ProfilePage = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userEmail = useAppSelector(state => state.login.email);
  const publicCardPacksCount = useAppSelector(state => state.login.publicCardPacksCount);
  console.log(userName);
  console.log(userEmail);
  console.log(publicCardPacksCount);
  const [imgURL, setImgURL] = useState(
    'https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png',
  );
  const [value, setValue] = useState(userName);

  const UpdateUserName = (title: string) => setValue(title);
  const logOutHandler = () => alert('logOut success');

  return (
    <div>
      <div>Personal Information</div>
      <div>
        <img className={s.img} src={imgURL} />
      </div>
      <div>
        Name:{' '}
        <EditableSpan
          value={userName}
          onChange={t => {
            UpdateUserName(t);
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
