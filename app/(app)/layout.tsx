import Link from 'next/link';
import React from 'react'
import { HiOutlineHome } from "react-icons/hi"
import { RiChatSmile3Line, RiCompass3Line, RiNotification3Line, RiSettings3Line } from 'react-icons/ri';




interface LayoutWithSidebarProps {
    children: React.ReactNode
}

const LayoutWithSidebar = ({ children }: LayoutWithSidebarProps) => {
    const tabs = [
        { name: "Home", pathname: "/home", icon: <HiOutlineHome /> },
        { name: "Explore", pathname: "/explore", icon: <RiCompass3Line /> },
        {
            name: "Discussions",
            pathname: "/discussions",
            icon: <RiChatSmile3Line />,
        },
        { name: "Notifications", pathname: "/notfications", icon: <RiNotification3Line /> },
        { name: "Settings", pathname: "/settings", icon: <RiSettings3Line /> },
    ];

    return (

        <div className="flex relative">
            <div className="flex flex-col w-64 h-screen sticky top-0 left-0">
                <div className="mb-5">
                    <div className="pl-8 py-3">
                        <Link href="/home" className="text-2xl font-bold">Joy</Link>
                    </div>
                </div>
                <div className="px-5 flex-1">
                    {tabs.map((item, index) => (


                        <Link
                            key={index}
                            href={item.pathname}
                            className="flex items-center px-3 rounded-md py-2 transition-colors text-gray-800 hover:bg-gray-100"
                        >
                            <div className="w-6 h-6 mr-5">
                                {item.icon}
                            </div>
                            <span className="">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
                <div className="px-5 pb-5">
                    <button className="w-full rounded-full flex px-2.5 py-2.5 hover:bg-gray-200">
                        <img
                            className="rounded-full w-10 h-10 bg-gray-200 object-cover mr-3"
                            src="https://images.unsplash.com/photo-1624668948516-cab8d7ce4414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            alt=""
                        />
                        <div className="text-left">
                            <div className="text-sm">Pierre Marie</div>
                            <div className="text-gray-500 text-xs">pierma</div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex-1">
                {children}
            </div>
        </div>

    )
}

export default LayoutWithSidebar