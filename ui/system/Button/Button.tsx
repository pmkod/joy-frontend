import { ButtonHTMLAttributes } from "react";
import { buttonStyle } from "./Button.style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rounded?: "full" | "md";
  variant?: "fill" | "outline" | "plain";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  colorScheme?: "primary" | "danger";
}


const Button = ({
  variant,
  rounded,
  colorScheme,
  children,
  size,
  fullWidth,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={buttonStyle({
        variant,
        rounded,
        colorScheme,
        size,
        fullWidth,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
