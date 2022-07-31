export type EditableSpanType = {
  value: string;
  onChange: (newValue: string) => void;
  name?: string;
  withButton?: boolean;
  titleButton?: string;
};
