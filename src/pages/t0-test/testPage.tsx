import React, { ReactElement } from 'react';

import { SuperButton, SuperCheckbox, SuperInputText } from 'components';

export const TestPage = (): ReactElement => (
  <div>
    <SuperButton>CLICK</SuperButton>
    <SuperCheckbox />
    <SuperInputText />
  </div>
);
