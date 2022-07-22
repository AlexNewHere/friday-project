import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import s from './SuperCheckbox.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeChecked,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  spanClassName,
  children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
    // eslint-disable-next-line no-unused-expressions
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = `${s.checkbox} ${className || ''}`;

  return (
    <>
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps}
      />
      {children && <span className={s.spanClassName}>{children}</span>}
    </>
  );
};
