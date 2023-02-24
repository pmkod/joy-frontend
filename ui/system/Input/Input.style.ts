import { cva } from "class-variance-authority";

export const inputLabelStyle = cva("mb-1.5", {
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-xs",
            md: "text-sm",
            lg: "",
            xl: "text-lg",
        },
    },
    defaultVariants: {
        size: "md",
    },
});

export const inputStyle = cva(
    "w-full border px-3 h-11 placeholder:font-normal transition-colors",
    {
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                md: "py-2",
                lg: "py-3 text-lg",
                xl: "py-4 text-xl",
            },
            variant: {
                fill: " border-gray-100 bg-gray-100 hover:bg-gray-200 hover:border-gray-200",
                outline:
                    "border-gray-300 hover:border-gray-400 focus:border-yellow-300 bg-transparent",
                plain: "border-transparent hover:bg-gray-100",
            },
            rounded: {
                full: "rounded-full",
                md: "rounded",
            },
            hasError: {
                true: "border-red-500",
            },
        },
        defaultVariants: {
            rounded: "md",
            variant: "outline",
            size: "md",
        },
    }
);
