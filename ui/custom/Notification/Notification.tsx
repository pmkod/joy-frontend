import Button from "@/ui/system/Button/Button";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

type NotificationProps = {
    notification: {
        type: number;
        images?: string[];
    };
};

const Notification = ({ notification: { type } }: NotificationProps) => {
    return (
        <div className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full cursor-pointer"
                />
            </div>
            <div className="flex-1 pl-4 text-sm text-gray-700">
                {type == 1 ? (
                    <div>@allisconnected, a commencé à vous suivre</div>
                ) : (
                    <div>@allisconnected, a aimé un de vos posts</div>
                )}
            </div>
            <div className="w-20 flex justify-end">
                {type == 1 ? (
                    <Button size="sm">Suivre</Button>
                ) : (
                    <AiFillHeart className="w-7 h-7 text-red-500" />
                )}
            </div>
        </div>
    );
};

export default Notification;
