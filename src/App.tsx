import React, { ReactElement, useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import s from './App.module.css';

import { NavBar } from 'components';
import { LINK } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks/useTypeHooks';
import {
  LoginPage,
  NewPasswordPage,
  NotFoundPage,
  ProfilePage,
  RecoveryPage,
  AuthPage,
  RegisterPage,
} from 'pages';
import { isInitializedAppThunk } from 'store';

const App = (): ReactElement => {
  const isInitialized = useAppSelector(state => state.login.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isInitializedAppThunk());
  }, []);

  if (!isInitialized) {
    return <div>ЗАгрузка</div>;
  }

  return (
    <div className={s.App}>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate replace to={LINK.LOGIN} />} />
          <Route path={LINK.LOGIN} element={<LoginPage />} />
          <Route path={LINK.REGISTER} element={<RegisterPage />} />
          <Route path={LINK.AUTH} element={<AuthPage />} />
          <Route path={LINK.PROFILE} element={<ProfilePage />} />
          <Route path={LINK.RECOVER} element={<RecoveryPage />} />
          <Route path={LINK.PASSWORD} element={<NewPasswordPage />} />
          <Route path={LINK.FOUND404} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
