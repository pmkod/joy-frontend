import React, { InputHTMLAttributes } from "react";
import { inputLabelStyle, inputStyle } from "./Input.style";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  rounded?: "full" | "md";
  variant?: "fill" | "outline" | "plain";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  hasMarginBottom?: boolean;

}

const Input = ({
  rounded,
  label,
  variant,
  size,
  hasMarginBottom,
  ...rest
}: InputProps) => {
  return (
    <div>
      {label && <div className={inputLabelStyle({ size })}>{label}</div>}
      <div>
        <input
          {...rest}
          autoComplete="off"
          className={inputStyle({ rounded, variant, size, hasMarginBottom })}
        />
      </div>
    </div>
  );
};

export default Input;
