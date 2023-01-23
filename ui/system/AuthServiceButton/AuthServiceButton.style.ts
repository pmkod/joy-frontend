import { cva } from "class-variance-authority";

export const authServiceButtonStyle = cva("w-full shadow-sm border py-2 rounded flex gap-x-3 justify-center hover:shadow duration-50 transition-all items-center", {
    variants: {
        service: {
            google: "border-gray-300 bg-gray-100  hover:bg-gray-200",
            facebook: "border-gray-300 bg-gray-100  hover:bg-gray-200",
            default: "bg-yellow-300 border-yellow-300 text-gray-700 hover:bg-yellow-400 shadow-yellow-400"
        }
    },
    defaultVariants: {
        service: "default"
    }
})