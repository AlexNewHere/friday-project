import React, { ChangeEvent, ReactElement, useState } from 'react';

import { PhotoCamera } from '@mui/icons-material';
import OutboxIcon from '@mui/icons-material/Outbox';
import { Avatar, Badge, IconButton } from '@mui/material';

import userDefaultAvatar from 'assets/logo/avatar.png';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { updateProfileThunk } from 'store';

export const UpdateAvatar = ({ avatar }: { avatar: string }): ReactElement => {
  const name = useAppSelector(state => state.login.name);
  const dispatch = useAppDispatch();
  const [upload, setUpload] = useState<string | ArrayBuffer | null>(null);
  const photoUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files![0];
    if (reader !== undefined) {
      reader.onloadend = () => {
        setUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpload = async (): Promise<void> => {
    if (upload !== null) {
      await dispatch(updateProfileThunk({ name, avatar: upload }));
    }
    setUpload(null);
  };
  console.log('1');
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <IconButton
          color="default"
          aria-label="upload picture"
          component="label"
          onClick={handleUpload}
        >
          <input
            disabled={!!upload}
            hidden
            accept="image/*, .png, .jpg, .web"
            type="file"
            onChange={photoUpload}
          />
          {upload ? <OutboxIcon color="success" /> : <PhotoCamera />}
        </IconButton>
      }
    >
      <Avatar
        src={avatar || userDefaultAvatar}
        alt="avatar"
        sx={{ width: 120, height: 120 }}
      />
    </Badge>
  );
};
