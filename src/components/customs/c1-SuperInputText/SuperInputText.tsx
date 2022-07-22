import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
} from 'react';

import s from './SuperInputText.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;
};

export const SuperInputText: React.FC<SuperInputTextPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);

    // eslint-disable-next-line no-unused-expressions
    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onKeyPress && onKeyPress(e);

    // eslint-disable-next-line no-unused-expressions
    onEnter && e.key === 'Enter' && onEnter();
  };

  const finalSpanClassName = `${s.error} ${spanClassName || ''}`;
  const finalInputClassName = `${s.superInput} ${error ? s.errorInput : className}`; // need to fix with (?:) and s.superInput

  return (
    <>
      <input
        type="text"
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps}
      />
      <div className={finalSpanClassName}>{error && <span>{error}</span>}</div>
    </>
  );
};
