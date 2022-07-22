import React, { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';

import s from './App.module.css';

import { NavBar } from 'components';
import { LINK } from 'enums';
import {
  TestPage,
  LoginPage,
  NewPasswordPage,
  NotFoundPage,
  ProfilePage,
  RecoveryPage,
  AuthPage,
} from 'pages';

const App = (): ReactElement => (
  <div className={s.App}>
    <NavBar />
    <div>
      <Routes>
        <Route path={LINK.TEST} element={<TestPage />} />
        <Route path={LINK.LOGIN} element={<LoginPage />} />
        <Route path={LINK.AUTH} element={<AuthPage />} />
        <Route path={LINK.PROFILE} element={<ProfilePage />} />
        <Route path={LINK.RECOVER} element={<RecoveryPage />} />
        <Route path={LINK.PASSWORD} element={<NewPasswordPage />} />
        <Route path={LINK.FOUND404} element={<NotFoundPage />} />
      </Routes>
    </div>
  </div>
);

export default App;
