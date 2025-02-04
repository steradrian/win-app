import Link from "next/link";
import React from "react";

type VariantType = "default" | "primary" | "secondary" | "primary2";
type SizeType = "small" | "large";

interface LinkControlProps {
  href: string;
  text: string;
  className?: string;
  variant?: VariantType;
  size?: SizeType;
  hasHover?: boolean;
}

const LinkControl: React.FC<LinkControlProps> = ({
  href,
  text,
  className = "",
  variant = "default",
  size = "large",
  hasHover = true,
}) => {
  const textSize = size === "large" ? "text-[1.125rem]" : "text-[0.875rem]";

  const variantStyles = {
    primary: {
      textColor: "text-textPrimary",
      bgColor: "bg-primary",
    },
    secondary: {
      textColor: "text-textSubdued",
      bgColor: "bg-light",
    },
    primary2: {
      textColor: "text-basePrimary",
      bgColor: "bg-basePrimary",
    },
    default: {
      textColor: "text-textDefault",
      bgColor: "bg-light",
    },
  };
  const { textColor, bgColor } =
    variantStyles[variant] || variantStyles.default;

  return (
    <Link
      href={href}
      className={`${textColor} ${textSize} leading-6 font-semibold py-1 px-3 relative group inline-block transition-colors 
        duration-300 
        ease-nice-ease ${
          variant === "secondary" ? "hover:text-textDefault" : ""
        } ${className}`}
    >
      {text}
      {hasHover && (
        <span
          className={`
          absolute 
          left-1/2 
          -translate-x-1/2 
          bottom-0 
          h-0.5 
          w-0 
          opacity-0 
          ${bgColor}
          transition-all 
          duration-300 
          ease-in-out 
          group-hover:w-[${size === "large" ? "90%" : "100%"}]
          group-hover:opacity-100
        `}
        />
      )}
    </Link>
  );
};

export default LinkControl;
