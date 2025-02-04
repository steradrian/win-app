import React from "react";

interface CheckboxControlProps {
  id: string;
  label?: string;
  children?: React.ReactNode; // In case we need to render a different case
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxControl = ({
  id,
  label,
  children,
  checked,
  onChange,
}: CheckboxControlProps) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className="relative flex items-center cursor-pointer pl-[1.5rem] text-[0.875rem] leading-5"
      >
        <span
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-4 border border-gray-300 rounded flex justify-center items-center border-2 border-gray transition-colors
        duration-300
        ease-nice-ease ${checked ? "bg-basePrimary" : "transparent"}`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </span>
        {label != null && (
          <span className="ml-2 text-sm leading-[0.875rem] text-dark">
            {label}
          </span>
        )}
        {children != null && children}
      </label>
    </div>
  );
};

export default CheckboxControl;
