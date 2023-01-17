import React, { ButtonHTMLAttributes } from "react";
import { inputLabelStyle, inputStyle } from "./Input.style";

interface InputProps extends ButtonHTMLAttributes<HTMLInputElement> {
  label?: string;
  rounded?: "full";
  variant?: "fill" | "outline" | "plain";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

const Input = ({
  rounded,
  label,
  variant,
  size,
  fullWidth,
  ...rest
}: InputProps) => {
  return (
    <div>
      {label && <div className={inputLabelStyle({size})}>{label}</div>}
      <div>
        <input
          {...rest}
          type="text"
          className={inputStyle({ rounded, variant, size, fullWidth })}
        />
      </div>
    </div>
  );
};

export default Input;
