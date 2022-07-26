import React, { ReactElement } from 'react';

import style from './AuthPageTitle.module.scss';

type AuthPageTitlePropsType = {
  title: string;
};

export const AuthPageTitle = ({ title }: AuthPageTitlePropsType): ReactElement => (
  <div className={style.title}>{title}</div>
);
