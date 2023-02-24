import { cva } from "class-variance-authority";

export const buttonStyle = cva(
    "relative flex justify-center items-center transition-colors font-medium border",
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
                dark: "",
            },
            size: {
                xs: "px-2 py-0.5 text-xs",
                sm: "px-3 py-1 text-sm",
                md: "px-5 py-2 text-sm",
                lg: "px-7 py-3 text-lg",
                xl: "px-9 py-4 text-xl",
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
                variant: "fill",
                colorScheme: "dark",
                className:
                    "bg-gray-800 border-gray-800 hover:bg-gray-900 hover:border-gray-900 text-white",
            },
            {
                variant: "fill",
                colorScheme: "danger",
                className:
                    "bg-red-500 border-red-600 hover:bg-red-600 hover:border-red-600 text-white",
            },
            {
                variant: "outline",
                colorScheme: "primary",
                className:
                    "text-yellow-500 hover:bg-gray-100 bg-transparent border-gray-300",
            },
            {
                variant: "outline",
                colorScheme: "dark",
                className:
                    "text-gray-800 hover:bg-gray-100 bg-transparent border-gray-300",
            },
            {
                variant: "outline",
                colorScheme: "danger",
                className:
                    "text-red-500 hover:bg-gray-100 bg-transparent border-gray-300",
            },
            {
                variant: "plain",
                colorScheme: "primary",
                className:
                    "text-yellow-500 hover:bg-gray-200 bg-transparent border-transparent",
            },
            {
                variant: "plain",
                colorScheme: "dark",
                className:
                    "text-gray-800 hover:bg-gray-200 bg-transparent border-transparent",
            },
            {
                variant: "plain",
                colorScheme: "danger",
                className:
                    "text-red-500 hover:bg-gray-200 bg-transparent border-transparent",
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

export const buttonIconStyle = cva("", {
    variants: {
        size: {
            xs: "w-3 h-3",
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6",
            xl: "w-7 h-7",
        },
        position: {
            left: "mr-3",
            right: "ml-3",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
