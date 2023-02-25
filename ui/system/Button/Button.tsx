import { ButtonHTMLAttributes } from "react";
import { buttonIconStyle, buttonStyle } from "./Button.style";

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
    children: React.ReactNode;
    rounded?: "full" | "md";
    variant?: "fill" | "outline" | "plain";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
    colorScheme?: "primary" | "danger" | "dark" | "white";
    compact?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Button = ({
    variant,
    rounded,
    colorScheme,
    children,
    size,
    fullWidth,
    leftIcon,
    rightIcon,
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
            {leftIcon && (
                <div className={buttonIconStyle({ size, position: "left" })}>
                    {leftIcon}
                </div>
            )}
            {children}

            {rightIcon && (
                <div className={buttonIconStyle({ size, position: "right" })}>
                    {rightIcon}
                </div>
            )}
        </button>
    );
};

export default Button;
