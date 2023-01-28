import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { iconButtonIconStyles, iconButtonStyles } from "./IconButton.style";



interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: "plain" | "outline" | "filled";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    colorScheme?: "primary" | "danger" | "dark";
    rounded?: "full" | "md";
    fullWidth?: boolean;
}

const IconButton = ({
    children,
    fullWidth,
    variant,
    rounded,
    colorScheme,
    size,
    ...rest
}: IconButtonProps) => {
    return (
        <button
            {...rest}
            className={iconButtonStyles({ size, variant, colorScheme, rounded, fullWidth })}
        >
            <span className={iconButtonIconStyles({ size })}>{children}</span>
        </button>
    );
};

export default IconButton;
