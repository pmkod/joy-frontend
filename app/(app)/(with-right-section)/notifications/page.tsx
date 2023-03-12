import Notification from "@/ui/custom/Notification/Notification";
import React from "react";

const NotificationsPage = () => {
    // 1 for like de posts
    // 2 for follow
    // 3 commentaire de post
    const notifications = [
        {
            type: 1,
        },
        {
            type: 2,
        },
        {
            type: 2,
        },
        {
            type: 1,
        },
        {
            type: 2,
        },
        {
            type: 2,
        },
        {
            type: 1,
        },
        {
            type: 1,
        },
        {
            type: 1,
        },
    ];
    // const notifications = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="pt-14 sm:pt-0">
            <div className="mx-auto w-[500px] sm:w-full">
                <div className="z-30 sticky top-0 hidden bg-white sm:flex h-14 px-4 justify-between items-center border-b border-two">
                    <span className="text-lg font-bold">Notifications</span>
                </div>

                {notifications.map((notification) => (
                    <div>
                        <Notification notification={notification} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;
