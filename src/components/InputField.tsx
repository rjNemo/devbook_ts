import React, {FC} from 'react';

interface IProps {
  state: string | number | string[] | undefined;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
  minLength?: number;
}

const InputField: FC<IProps> = ({
  state,
  setState,
  placeholder,
  autoFocus,
  required,
  minLength,
  type = 'text',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };

  return (
    <div className="form-group">
      <input
        value={state}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        autoFocus={autoFocus}
        required={required}
        minLength={minLength}
      />
    </div>
  );
};
export default InputField;
