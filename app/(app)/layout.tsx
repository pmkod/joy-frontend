"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
    HiHome,
    HiOutlineHome,
    HiOutlineSearch,
    HiSearch,
} from "react-icons/hi";
import {
    RiChatSmile3Fill,
    RiChatSmile3Line,
    RiCompass3Fill,
    RiCompass3Line,
    RiNotification3Fill,
    RiNotification3Line,
    RiSearch2Fill,
    RiSearch2Line,
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
            className={`lg:w-max flex items-center mb-0.5 rounded-lg transition-colors font-medium ${
                isActive
                    ? "text-blue-600 bg-gray-100"
                    : "text-gray-500 hover:bg-gray-100"
            }`}
        >
            <div className="px-3 py-2 mr-1 lg:mr-0 lg:py-3">
                <div className="w-6 h-6">
                    {isActive ? filledIcon : outlinedIcon}
                </div>
            </div>
            <span className="lg:hidden">{label}</span>
        </Link>
    );
};

interface BottomTabLinkProps {
    pathname: string;
    filledIcon: React.ReactNode;
    outlinedIcon: React.ReactNode;
    label: string;
}

const BottomTabLink = ({
    pathname,
    filledIcon,
    outlinedIcon,
    label,
}: BottomTabLinkProps) => {
    const currentPathname = usePathname();
    const isActive = currentPathname?.startsWith(pathname);
    return (
        <Link
            href={pathname}
            className={`w-full flex items-center justify-center ${
                isActive ? "text-blue-600" : "text-gray-400"
            }`}
        >
            <div className="w-7 h-7">
                {isActive ? filledIcon : outlinedIcon}
            </div>
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
            outlineIcon: <HiOutlineSearch />,
            fillIcon: <HiSearch />,
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

    const bottomTabLinks = [
        {
            label: "Home",
            pathname: "/home",
            outlineIcon: <HiOutlineHome />,
            fillIcon: <HiHome />,
        },
        {
            label: "Explore",
            pathname: "/explore",
            outlineIcon: <HiOutlineSearch />,
            fillIcon: <HiSearch />,
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
    ];

    return (
        <div className="flex relative">
            <div className="flex flex-col lg:items-center sm:hidden w-64 lg:w-max h-screen sticky top-0 left-0">
                <div className="pl-8 py-3 mb-5 lg:pl-0">
                    <Link href="/home" className="lg:hidden text-2xl font-bold">
                        Reborn
                    </Link>
                    <Link
                        href="/home"
                        className="hidden lg:block text-2xl font-bold"
                    >
                        Re
                    </Link>
                </div>
                <div className="px-5 flex flex-col lg:px-0 lg:items-center flex-1">
                    {tabs.map((item, index) => (
                        <SidebarLink
                            key={index}
                            label={item.label}
                            pathname={item.pathname}
                            filledIcon={item.fillIcon}
                            outlinedIcon={item.outlineIcon}
                        />
                    ))}
                </div>
                <div className="px-5 lg:px-2 pb-5">
                    <button className="w-full rounded-full flex px-2.5 py-2.5 hover:bg-gray-200">
                        <img
                            className="rounded-full w-10 h-10 bg-gray-200 object-cover"
                            src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt=""
                        />
                        <div className="text-left ml-3 lg:hidden">
                            <div className="text-sm">Pierre Marie</div>
                            <div className="text-gray-500 text-xs">pierma</div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <div className="sm:mb-20">{children}</div>
                <div className="hidden border-t border-gray-100 sm:flex bg-white fixed bottom-0 left-0 w-full h-16">
                    {bottomTabLinks.map((item, index) => (
                        <BottomTabLink
                            key={index}
                            label={item.label}
                            pathname={item.pathname}
                            filledIcon={item.fillIcon}
                            outlinedIcon={item.outlineIcon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LayoutWithSidebar;
