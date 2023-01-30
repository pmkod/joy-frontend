"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import {
    RiChatSmile3Fill,
    RiChatSmile3Line,
    RiCompass3Fill,
    RiCompass3Line,
    RiNotification3Fill,
    RiNotification3Line,
    RiSettings3Fill,
    RiSettings3Line,
    RiSpeaker3Line,
    RiUser3Fill,
    RiUser3Line,
} from "react-icons/ri";

interface SidebarLinkProps {
    pathname: string;
    filledIcon: React.ReactNode;
    outlinedIcon: React.ReactNode;
    label: string;
}

const SidebarLink = ({
    pathname,
    filledIcon,
    outlinedIcon,
    label,
}: SidebarLinkProps) => {
    const currentPathname = usePathname();
    const isActive = currentPathname?.startsWith(pathname);
    return (
        <Link
            href={pathname}
            className={`flex items-center px-3 rounded-lg py-2 transition-colors font-medium ${
                isActive
                    ? "text-blue-600 bg-gray-100"
                    : "text-gray-500 hover:bg-gray-100"
            }`}
        >
            <div className="w-6 h-6 mr-4">
                {isActive ? filledIcon : outlinedIcon}
            </div>
            <span className="">{label}</span>
        </Link>
    );
};

interface LayoutWithSidebarProps {
    children: React.ReactNode;
}

const LayoutWithSidebar = ({ children }: LayoutWithSidebarProps) => {
    const tabs = [
        {
            label: "Home",
            pathname: "/home",
            outlineIcon: <HiOutlineHome />,
            fillIcon: <HiHome />,
        },
        {
            label: "Explore",
            pathname: "/explore",
            outlineIcon: <RiCompass3Line />,
            fillIcon: <RiCompass3Fill />,
        },
        {
            label: "Discussions",
            pathname: "/discussions",
            outlineIcon: <RiChatSmile3Line />,
            fillIcon: <RiChatSmile3Fill />,
        },
        {
            label: "Notifications",
            pathname: "/notifications",
            outlineIcon: <RiNotification3Line />,
            fillIcon: <RiNotification3Fill />,
        },
        {
            label: "Profile",
            pathname: "/accounts/pierma",
            outlineIcon: <RiUser3Line />,
            fillIcon: <RiUser3Fill />,
        },
        {
            label: "Settings",
            pathname: "/settings",
            outlineIcon: <RiSettings3Line />,
            fillIcon: <RiSettings3Fill />,
        },
    ];

    return (
        <div className="flex relative">
            <div className="flex flex-col w-64 h-screen sticky top-0 left-0">
                <div className="mb-5">
                    <div className="pl-8 py-3">
                        <Link href="/home" className="text-2xl font-bold">
                            Reborn
                        </Link>
                    </div>
                </div>
                <div className="px-5 flex-1">
                    {tabs.map((item, index) => (
                        <SidebarLink
                            label={item.label}
                            pathname={item.pathname}
                            filledIcon={item.fillIcon}
                            outlinedIcon={item.outlineIcon}
                        />
                    ))}
                </div>
                <div className="px-5 pb-5">
                    <button className="w-full rounded-full flex px-2.5 py-2.5 hover:bg-gray-200">
                        <img
                            className="rounded-full w-10 h-10 bg-gray-200 object-cover mr-3"
                            src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt=""
                        />
                        <div className="text-left">
                            <div className="text-sm">Pierre Marie</div>
                            <div className="text-gray-500 text-xs">pierma</div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex-1 relative">{children}</div>
        </div>
    );
};

export default LayoutWithSidebar;
