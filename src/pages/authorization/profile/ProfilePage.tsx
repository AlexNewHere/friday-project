import React, { ReactElement } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {
  EditableSpan,
  AuthPageWrapper,
  LogInOutButton,
  UpdateAvatar,
  BackToNameArrow,
} from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { updateProfileThunk } from 'store';

export const ProfilePage = (): ReactElement => {
  const userName = useAppSelector(state => state.login.name);
  const userEmail = useAppSelector(state => state.login.email);
  const avatar = useAppSelector(state => state.login.avatar);
  const dispatch = useAppDispatch();
  const updateUserName = (name: string): void => {
    dispatch(updateProfileThunk({ name, avatar }));
  };

  return (
    <Container>
      <BackToNameArrow name="Packs List" link={LINK.PACKS} />
      <AuthPageWrapper>
        <Typography variant="h1">Personal Information</Typography>
        <UpdateAvatar avatar={avatar} />
        <EditableSpan
          name="Name: "
          withButton
          titleButton="Save"
          value={userName}
          onChange={updateUserName}
        />
        <Typography
          component="p"
          sx={{
            pt: '14px',
            pb: '29px',
            opacity: 0.5,
          }}
        >
          {`${userEmail}`}
        </Typography>
        <LogInOutButton />
      </AuthPageWrapper>
    </Container>
  );
};
