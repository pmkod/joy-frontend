import React, { InputHTMLAttributes } from "react";
import { inputLabelStyle, inputStyle } from "./Input.style";

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    rounded?: "full" | "md";
    variant?: "fill" | "outline" | "plain";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    hasMarginBottom?: boolean;
    errorMessage?: string;
}

const Input = ({
    rounded,
    label,
    variant,
    size,
    hasMarginBottom = true,
    errorMessage,
    ...rest
}: InputProps) => {
    return (
        <div className={`${hasMarginBottom && "mb-5"}`}>
            {label && <div className={inputLabelStyle({ size })}>{label}</div>}
            <div className="h-min">
                <input
                    {...rest}
                    autoComplete="off"
                    className={inputStyle({
                        rounded,
                        variant,
                        size,
                        hasError: errorMessage !== undefined,
                    })}
                />
            </div>
            {errorMessage !== undefined && (
                <div className="text-sm mt-0.5 font-normal text-red-500">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default Input;
