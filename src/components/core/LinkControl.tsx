import Link from "next/link";
import React from "react";

type VariantType = "default" | "primary" | "secondary";
type SizeType = "small" | "large";

interface LinkControlProps {
  href: string;
  text: string;
  className?: string;
  variant?: VariantType;
  size?: SizeType;
}

const LinkControl: React.FC<LinkControlProps> = ({
  href,
  text,
  className = "",
  variant = "default",
  size = "large",
}) => {
  const textColor =
    variant === "primary"
      ? "textPrimary"
      : variant === "secondary"
      ? "textSubdued"
      : "textDefault";
  const bgColor = variant === "primary" ? "primary" : "light";
  const textSize = size === "large" ? "text-[1.125rem]" : "text-[0.875rem]";

  return (
    <Link
      href={href}
      className={`text-${textColor} ${textSize} leading-6 font-semibold py-1 px-3 relative group inline-block transition-colors 
        duration-300 
        ease-nice-ease ${
          variant === "secondary" ? "hover:text-textDefault" : ""
        } ${className}`}
    >
      {text}
      <span
        className={`
          absolute 
          left-1/2 
          -translate-x-1/2 
          bottom-0 
          h-0.5 
          w-0 
          opacity-0 
          bg-${bgColor}
          transition-all 
          duration-300 
          ease-in-out 
          group-hover:w-[${size === "large" ? "90%" : "100%"}]
          group-hover:opacity-100
        `}
      />
    </Link>
  );
};

export default LinkControl;
