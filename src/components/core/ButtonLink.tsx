import Link from "next/link";

type ButtonType = "small" | "default";

interface ButtonLinkProps {
  href: string;
  text: string;
  variant?: ButtonType;
}

const ButtonLink = ({ href, text, variant = "default" }: ButtonLinkProps) => {
  // Define styles based on the variant
  const padding =
    variant === "small"
      ? "p-[0.25rem] px-[0.75rem]"
      : "p-[0.6875rem] px-[1.375rem]"; // 4px 8px vs 11px 22px
  const fontSize = variant === "small" ? "text-[0.875rem]" : "text-[1rem]"; // 14px vs 16px
  const borderRadius =
    variant === "small" ? "rounded-[0.5rem]" : "rounded-[0.625rem]"; // 8px vs 10px

  return (
    <Link
      href={href}
      className={`
        inline-block
        bg-primary 
        text-textDefault 
        bg-opacity-100 
        transition-colors 
        duration-300 
        ease-nice-ease 
        shadow 
        capitalize 
        hover:bg-primaryHover
        hover:shadow-md 
        focus:outline-none 
        ${padding} 
        ${fontSize} 
        ${borderRadius}
      `}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
