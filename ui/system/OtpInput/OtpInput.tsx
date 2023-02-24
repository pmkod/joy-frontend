import React from "react";
import AuthCode from "react-auth-code-input";

type OtpInputProps = {
    onChange: (res: string) => void;
    length?: number;
    allowedCharacters?: "numeric" | "alpha" | "alphanumeric";
};

const OtpInput = ({
    onChange,
    length = 6,
    allowedCharacters = "numeric",
}: OtpInputProps) => {
    return (
        <AuthCode
            onChange={onChange}
            length={length}
            allowedCharacters={allowedCharacters}
            containerClassName="flex justify-between"
            placeholder=" "
            inputClassName="border-2 border-gray-300 w-14 sm:w-10 h-20 sm:h-16 text-2xl rounded text-center [&:not(:placeholder-shown)]:border-gray-800 focus:border-gray-800"
        />
    );
};

export default OtpInput;
