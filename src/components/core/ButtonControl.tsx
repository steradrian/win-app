import React, { ButtonHTMLAttributes, FC, MemoExoticComponent } from "react";

type ButtonSize = "small" | "medium" | "big";
type ButtonVariant = "primary" | "primary2" | "secondary" | "lightGray";
type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonControlProps {
  text: string;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  fadeIn?: boolean;
  type?: ButtonType;
  Icon?: FC | MemoExoticComponent<FC>;
  onClick?: () => void;
}

const sizeStyles = {
  small: {
    padding: "py-[0.25rem] px-[0.75rem]",
    fontSize: "text-[0.875rem]",
    borderRadius: "rounded-[0.5rem]",
  },
  medium: {
    padding: "py-[0.5rem] px-[1rem]",
    fontSize: "text-[0.875rem]",
    borderRadius: "rounded-[0.5rem]",
  },
  big: {
    padding: "py-[0.6875rem] px-[1.375rem]",
    fontSize: "text-[1rem]",
    borderRadius: "rounded-[0.625rem]",
  },
};

const variantStyles = {
  primary: {
    backgroundColor: "bg-primary",
    hover: "hover:bg-primaryHover",
    textColor: "text-textDefault",
  },
  primary2: {
    backgroundColor: "bg-basePrimary",
    hover: "hover:bg-basePrimaryHover",
    textColor: "text-textDefault",
  },
  secondary: {
    backgroundColor: "bg-[rgba(255,255,255,0.02)]",
    hover: "hover:bg-[rgba(255,255,255,0.05)]",
    textColor: "text-textDefault",
  },
  lightGray: {
    backgroundColor: "bg-lightGray",
    hover: "hover:bg-gray",
    textColor: "text-textDark",
  },
};

const ButtonControl = ({
  text,
  className = "",
  size = "big",
  variant = "primary",
  fadeIn = false,
  type = "button",
  Icon,
  onClick,
}: ButtonControlProps) => {
  const { padding, fontSize, borderRadius } = sizeStyles[size];
  const { backgroundColor, textColor, hover } = variantStyles[variant];

  return (
    <button
      className={`
        inline-block
        ${backgroundColor}
        ${textColor}
        leading-6
        bg-opacity-100
        transition-colors
        duration-300
        ease-nice-ease
        shadow
        capitalize
        ${hover}
        hover:shadow-md
        focus:outline-none
        ${padding}
        ${fontSize}
        ${borderRadius}
        ${fadeIn ? "animate-fade-in" : ""}
        ${className}
      `}
      type={type}
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon />}
        {text}
      </div>
    </button>
  );
};

export default ButtonControl;
