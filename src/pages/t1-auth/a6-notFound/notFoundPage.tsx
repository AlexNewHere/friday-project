import React, { ReactElement } from 'react';

import s from './notFound.module.scss';

export const NotFoundPage = (): ReactElement => (
  <div id={s.main}>
    <div className={s.fof}>
      <h1>Page not found 404</h1>
    </div>
  </div>
);
