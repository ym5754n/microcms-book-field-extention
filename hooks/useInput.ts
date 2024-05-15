import { useState } from "react";

export const useInput = (initialState: string = ''): [
  string,
  React.InputHTMLAttributes<HTMLInputElement>,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState(initialState);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return [
    value,
    { value,
      onChange,
    },
    setValue,
  ];
}