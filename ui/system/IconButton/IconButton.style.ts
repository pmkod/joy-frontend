import { cva } from "class-variance-authority";

export const iconButtonStyles = cva(
  "font-medium text-sm border transition-colors flex justify-center items-center",
  {
    variants: {
      size: {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-14 h-14",
      },

      variant: {
        filled: "",
        outline: "",
        plain: "",
      },
      colorScheme: {
        primary: "",
        danger: "",
        dark: "",
      },
      rounded: {
        full: "rounded-full",
        md: "rounded-md",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        colorScheme: "primary",
        className:
          "border-yellow-300 hover:border-yellow-400 bg-yellow-300 hover:bg-yellow-400 text-white",
      },
      {
        variant: "filled",
        colorScheme: "danger",
        className:
          "border-red-500 hover:border-red-600 bg-red-500 hover:bg-red-600 text-white",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "border-gray-300 bg-transparent hover:bg-gray-100 text-yellow-400",
      },
      {
        variant: "outline",
        colorScheme: "danger",
        className:
          "border-gray-300 bg-transparent hover:bg-gray-100 text-red-500",
      },
      {
        variant: "plain",
        colorScheme: "primary",
        className:
          "border-transparent bg-transparent hover:bg-gray-100 text-yellow-400",
      },
      {
        variant: "plain",
        colorScheme: "dark",
        className:
          "border-transparent bg-transparent hover:bg-gray-100 text-gray-900",
      },
      {
        variant: "plain",
        colorScheme: "danger",
        className:
          "border-transparent bg-transparent hover:bg-gray-100 text-red-500",
      },
    ],
    defaultVariants: {
      colorScheme: "primary",
      variant: "plain",
      size: "md",
      rounded: "md",
    },
  }
);

export const iconButtonIconStyles = cva("", {
  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-7 h-7",
      xl: "w-9 h-9",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
