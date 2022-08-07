import React, { ReactElement } from 'react';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import IconButton from '@mui/material/IconButton';

import { useAppSelector } from 'hooks/useTypeHooks';

type PropsType = {
  userId: string;
};

export const EditIcon = ({ userId }: PropsType): ReactElement => {
  const profileId = useAppSelector(state => state.login._id);

  return (
    <IconButton disabled={userId !== profileId} size="small" color="primary">
      <DriveFileRenameOutlineIcon />
    </IconButton>
  );
};
