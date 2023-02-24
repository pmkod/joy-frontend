import { cva } from "class-variance-authority";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RiUserFill } from "react-icons/ri";
import { authServiceButtonStyle } from "./AuthServiceButton.style";

interface AuthServiceButtonProps {
    service?: "facebook" | "google" | "default";
    text?: string;
    onClick: Function;
}

const AuthServiceButton = ({
    service = "default",
    text,
    onClick,
}: AuthServiceButtonProps) => {
    const authServices = {
        google: {
            icon: <FcGoogle className="text-white" />,
        },
        facebook: {
            icon: <AiFillFacebook className="text-blue-600" />,
        },
        default: {
            icon: <RiUserFill className="" />,
        },
    };
    return (
        <button
            className={authServiceButtonStyle({ service })}
            onClick={() => onClick()}
        >
            <div className="w-[17px]">{authServices[service].icon}</div>

            <span>{text}</span>
        </button>
    );
};

export default AuthServiceButton;
