import { cva } from "class-variance-authority";

export const buttonStyle = cva(
  "relative self-start flex justify-center items-center rounded-full transition-colors font-medium border",
  {
    variants: {
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
      },
      variant: {
        fill: "",
        outline: "",
        plain: "",
      },
      colorScheme: {
        primary: "",
        danger: "",
      },
      size: {
        xs: "px-2 py-0.5 text-xs",
        sm: "px-3 py-1 text-sm",
        md: "px-5 py-2",
        lg: "px-6 py-3 text-lg",
        xl: "px-7 py-4 text-xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      // Primary
      {
        variant: "fill",
        colorScheme: "primary",
        className:
          "bg-yellow-300 border-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 text-gray-800",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "text-yellow-500 hover:bg-gray-100 bg-transparent border-gray-300",
      },
      {
        variant: "plain",
        colorScheme: "primary",
        className:
          "text-yellow-500 hover:bg-gray-100 bg-transparent border-transparent",
      },
      // Danger
      {
        variant: "fill",
        colorScheme: "danger",
        className:
          "bg-red-500 border-red-600 hover:bg-red-600 hover:border-red-600 text-white",
      },
      {
        variant: "outline",
        colorScheme: "danger",
        className:
          "text-red-500 hover:bg-gray-100 bg-transparent border-gray-300",
      },
      {
        variant: "plain",
        colorScheme: "danger",
        className:
          "text-red-500 hover:bg-gray-100 bg-transparent border-transparent",
      },
    ],
    defaultVariants: {
      rounded: "full",
      variant: "fill",
      colorScheme: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);
