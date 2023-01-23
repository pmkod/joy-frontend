import { cva } from "class-variance-authority";
import React from "react";



// const textStyles = cva(
  
// )


interface TextProps {
  children: React.ReactNode;
  variant?:
    | "display1"
    | "display2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "body3";
  transform?: "lowercase" | "uppercase" | "capitalize";
  align?: "center" | "left" | "right";
  weight?: "medium" | "regular" | "semibold" | "bold";
}

const Text = ({
  children,
  variant = "body1",
  align = "left",
  transform,
  weight,
}: TextProps) => {
  const defaultBoldVariants: TextProps["variant"][] = [
    "display1",
    "display2",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ];
  return (
    <div
      className={`text-gray-900 hover:text-inherit
  ${
    (variant === "display1" && "text-8xl sm:text-4.5xl") ||
    (variant === "display2" && "text-7xl sm:text-4.25xl") ||
    (variant === "h1" && "text-6xl sm:text-4xl") ||
    (variant === "h2" && "text-5xl sm:text-3xl") ||
    (variant === "h3" && "text-4xl sm:text-2xl") ||
    (variant === "h4" && "text-3xl sm:text-xl") ||
    (variant === "h5" && "text-2xl sm:text-lg") ||
    (variant === "h6" && "text-xl sm:text-base") ||
    (variant === "body1" && "text-base sm:text-sm") ||
    (variant === "body2" && "text-sm sm:text-xs") ||
    (variant === "body3" && "text-xs")
  }
  ${
    weight === undefined
      ? defaultBoldVariants.includes(variant)
        ? "font-bold"
        : "font-regular"
      : (weight === "medium" && "font-medium") ||
        (weight === "regular" && "font-regular") ||
        (weight === "semibold" && "font-semibold") ||
        (weight === "bold" && "font-bold")
  }
  ${
    (align === "left" && "text-left") ||
    (align === "center" && "text-center") ||
    (align === "right" && "text-right")
  }
${
  (transform === "lowercase" && "lowercase") ||
  (transform === "capitalize" && "capitalize") ||
  (transform === "uppercase" && "uppercase")
}
  `}
    >
      {children}
    </div>
  );
};

export default Text;