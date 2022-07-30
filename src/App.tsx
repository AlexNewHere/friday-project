import React, { ReactElement, useEffect } from 'react';

import { CircularProgress, Container } from '@mui/material';

import s from './App.module.css';

import { HeadBar, NavBar, AppRoutes } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import { isInitializedAppThunk } from 'store';

const App = (): ReactElement => {
  const isInitialized = useAppSelector(state => state.login.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isInitializedAppThunk());
  }, []);

  if (!isInitialized) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30%',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container fixed>
      <HeadBar />
      <AppRoutes />
      <div className={s.App}>
        <NavBar />
      </div>
    </Container>
  );
};

export default App;
