import React, { ReactElement } from 'react';

import { Outlet, Navigate } from 'react-router-dom';

import { LINK } from 'enums';
import { useAppSelector } from 'hooks/useTypeHooks';

export const UnAuthorizedRedirect = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate replace to={LINK.LOGIN} />;
};
