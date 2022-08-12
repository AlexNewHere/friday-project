import React, { ReactElement, useEffect } from 'react';

import Container from '@mui/material/Container';

import s from './App.module.css';

import {
  HeadBar,
  NavBar,
  AppRoutes,
  CircularInitialized,
  ErrorSnackbar,
} from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { isInitializedAppThunk } from 'store';

const App = (): ReactElement => {
  const isInitialized = useAppSelector(state => state.login.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isInitializedAppThunk());
  }, []);

  if (!isInitialized) {
    return <CircularInitialized />;
  }

  return (
    <Container fixed disableGutters sx={{ pb: '100px', pt: '120px' }}>
      <ErrorSnackbar />
      <HeadBar />
      <AppRoutes />
      <div className={s.App}>
        <NavBar />
      </div>
    </Container>
  );
};

export default App;
