import React, { ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ModalLoader, UnAuthorizedRedirect } from 'components';
import { LINK } from 'enums';
import {
  CheckEmail,
  LoginPage,
  NewPasswordPage,
  NotFoundPage,
  PacksListPage,
  ProfilePage,
  RecoveryPage,
  RegisterPage,
  CardsPage,
  NewPackPage,
} from 'pages';

export const AppRoutes = (): ReactElement => (
  <div>
    <ModalLoader />
    <Routes>
      <Route path="/" element={<Navigate replace to={LINK.LOGIN} />} />
      <Route path={LINK.LOGIN} element={<LoginPage />} />
      <Route path={LINK.REGISTER} element={<RegisterPage />} />
      <Route path={LINK.RECOVER} element={<RecoveryPage />} />
      <Route path={LINK.FOUND404} element={<NotFoundPage />} />
      <Route path={LINK.PASSWORD} element={<NewPasswordPage />} />
      <Route path={LINK.EMAIL} element={<CheckEmail />} />
      <Route element={<UnAuthorizedRedirect />}>
        <Route path={LINK.PROFILE} element={<ProfilePage />} />
        <Route path={LINK.PACKS} element={<PacksListPage />} />
        <Route path={LINK.CARDS} element={<CardsPage />} />
        <Route path={LINK.NEWPACK} element={<NewPackPage />} />
      </Route>
      <Route path="*" element={<Navigate replace to={LINK.FOUND404} />} />
    </Routes>
  </div>
);
