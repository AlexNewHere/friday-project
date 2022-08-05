import { useEffect, useState } from 'react';

const defaultTime: number = 500;

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || defaultTime);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
