import React from "react";
import { RiChat1Line, RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

type PostActionButtonProps = {
    action: "like" | "comment";
    onClick: any;
    counter: number;
};

const PostActionButton = ({
    action,
    onClick,
    counter,
}: PostActionButtonProps) => {
    return (
        <div
            onClick={onClick}
            className={`rounded-full p-2 cursor-pointer text-gray-700 transition-colors
            ${
                action === "like"
                    ? "hover:bg-red-50 hover:text-red-500"
                    : "hover:bg-blue-50 hover:text-blue-500"
            }`}
        >
            <div className="w-7 h-7">
                {(action === "like" && <RiHeart3Line />) ||
                    (action === "comment" && <RiChat1Line />)}
            </div>
        </div>
    );
};

export default PostActionButton;
