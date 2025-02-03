type ButtonType = "small" | "medium" | "big";
type ButtonVariant = "primary" | "secondary";

interface ButtonControlProps {
  text: string;
  className?: string;
  size?: ButtonType;
  variant?: ButtonVariant;
  fadeIn?: boolean;
  onClick: () => void;
}

const ButtonControl = ({
  text,
  className = "",
  size = "big",
  variant = "primary",
  fadeIn = false,
  onClick,
}: ButtonControlProps) => {
  // Define styles based on the size
  const padding =
    size === "small"
      ? "py-[0.25rem] px-[0.75rem]" // small - 4px x 8px
      : size === "medium"
      ? "py-[0.5rem] px-[1rem]" // medium - 8px x 16px
      : "py-[0.6875rem] px-[1.375rem]"; // big - 11px 22px
  const fontSize = size === "big" ? "text-[1rem]" : "text-[0.875rem]"; // big - 16px; small & medium - 14px
  const borderRadius =
    size === "big" ? "rounded-[0.625rem]" : "rounded-[0.5rem]"; // big - 10px; small & medium - 8px
  const backgrounColor =
    variant === "primary" ? "bg-primary" : "bg-[rgba(255,255,255,0.02)] ";
  const backgroundColorHover =
    variant === "primary"
      ? "hover:bg-primaryHover"
      : "hover:bg-[rgba(255,255,255,0.05)] ";

  return (
    <button
      className={`
        inline-block
        ${backgrounColor} 
        text-textDefault
        leading-6
        bg-opacity-100 
        transition-colors 
        duration-300 
        ease-nice-ease 
        shadow 
        capitalize 
        ${backgroundColorHover} 
        hover:shadow-md 
        focus:outline-none 
        ${padding} 
        ${fontSize} 
        ${borderRadius}
        ${fadeIn ? "animate-fade-in" : ""}
        ${className}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonControl;
