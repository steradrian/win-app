import React, { HTMLInputTypeAttribute } from "react";

interface InputControlProps {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string | number;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}

const InputControl = ({
  id,
  label,
  type,
  placeholder,
  value,
  required,
  onChange,
  onFocus,
}: InputControlProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm leading-[0.875rem] font-medium text-dark"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        className="bg-lightGray text-textDark py-1 px-2 text-sm leading-8 w-full rounded-[0.25rem] transition-colors duration-300 ease-nice-ease focus:ring-basePrimary"
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
};

export default InputControl;
