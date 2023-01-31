"use client";
import Input from "@/ui/system/Input/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface DiscussionsLayoutProps {
    children: React.ReactNode;
}

const DiscussionsLayout = ({ children }: DiscussionsLayoutProps) => {
    const discussions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    // const { query } = useRouter();
    // console.log(query);
    // const discussionId = query
    // const router = useRouter();
    // router.
    return (
        <div className="flex h-screen ">
            {/* Left part */}
            <div className="w-80 md:w-full flex flex-col border-x border-two">
                <div className="h-14 px-4 flex justify-between items-center border-b border-two">
                    <span className="text-lg font-bold">Discussions</span>
                    {/* <NewMessageOrGroupDropdown /> */}
                </div>
                <div className="px-4 py-3 border-b">
                    <Input
                        type="text"
                        hasMarginBottom={false}
                        placeholder="Rechercher"
                    />
                </div>
                <div className="flex-1 overflow-y-auto">
                    {/* {!discussions.loaded && */}
                    {/* [0, 1, 2, 3, 4, 5, 6].map((_, index) => ( */}
                    {/* <div key={index} className="flex animate-pulse px-4 py-2.5">
                <div className="w-11 h-11 rounded-full bg-three mr-3"></div>
                <div className="flex-1 flex flex-col justify-between py-1.5">
                  <div className="rounded-xl w-4/5 h-2.5 bg-three"></div>
                  <div className="rounded-xl w-1/3 h-2 bg-three"></div>
                </div>
              </div> */}
                    {/* ))} */}
                    {discussions.map((a, index) => (
                        <Link href={`/discussions/1000000`} key={index}>
                            <div
                                className={`px-4 py-3 ${
                                    false ? "bg-gray-100" : "hover:bg-gray-200"
                                } cursor-pointer flex transition-all`}
                            >
                                <div className="w-11 h-11">
                                    <img
                                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        alt="Azep"
                                        className="w-full h-full rounded-full bg-yellow-50 object-cover"
                                    />
                                </div>
                                <div className="flex-1 overflow-x-hidden px-3">
                                    <div className="w-full truncate mb-0.5 font-medium text-gray-900">
                                        Yohan Coulibaly
                                    </div>
                                    <div className="w-full text-sm text-gray-500 truncate">
                                        {/* {disc.lastMessage.text} */}
                                        Mec c'est comment
                                    </div>
                                </div>
                                <div className="pt-1 flex flex-col items-end">
                                    <div className="text-xs text-gray-400 mb-1.5">
                                        10:28
                                        {/* {dayjs(disc.lastMessage.createdAt).format("HH:mm")} */}
                                    </div>
                                    <div className="bg-yellow-300 text-gray-800 rounded-full px-1.5 py-0.5 text-xs font-medium">
                                        2
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Right part */}
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default DiscussionsLayout;
