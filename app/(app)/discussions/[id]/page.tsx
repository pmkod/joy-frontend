"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSmile } from "react-icons/ai";
import {
    IoCallOutline,
    IoVideocamOutline,
    IoSend,
    IoMicOutline,
    IoImageOutline,
} from "react-icons/io5";
import { BsChevronLeft } from "react-icons/bs";
import ChatMessage, {
    ChatMessageProps,
} from "@/ui/custom/ChatMessage/ChatMessage";
import IconButton from "@/ui/system/IconButton/IconButton";
import Input from "@/ui/system/Input/Input";

const DiscussionPage = () => {
    const router = useRouter();
    const chatRef = useRef<HTMLDivElement>(null);
    const goToDiscussionsPage = () => {
        router.push("/discussions");
    };

    const fakeMessages: ChatMessageProps[] = [
        {
            isGroupChatMessage: false,
            createdAt: Date(),
            sender: {
                id: 2,
                fullName: "Marie Paul",
                userName: "mapau",
            },
            text: "Bonjour",
        },
        {
            isGroupChatMessage: false,
            createdAt: Date(),
            sender: {
                id: 1,
                fullName: "Marie Paul",
                userName: "mapau",
            },
            text: "Wesh on dit quoi ?",
        },
        {
            isGroupChatMessage: false,
            createdAt: Date(),
            sender: {
                id: 2,
                fullName: "Marie Paul",
                userName: "mapau",
            },
            text: "ça va ohh on se voit quand",
        },
    ];
    return (
        <div className="flex h-screen flex-1">
            <div className="flex flex-col h-full flex-1">
                {/* Top */}
                <div className="h-14 flex items-center justify-between pl-2 pr-4 border-b border-gray-200">
                    {/* Top Left */}
                    <div className="flex items-center">
                        <IconButton
                            colorScheme="dark"
                            onClick={goToDiscussionsPage}
                        >
                            <BsChevronLeft />
                        </IconButton>
                        <div className="w-10 h-10 mr-3 sm:mr-2">
                            <img
                                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt=""
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="w-96 sm:w-[20vh]">
                            <div className="font-semibold mb-1 sm:text-sm">
                                Yohan coulibaly
                            </div>
                            <div className="text-xs text-eight sm:text-xs truncate">
                                En ligne
                            </div>
                        </div>
                    </div>
                    {/* Top Right */}
                    <div className="flex">
                        <IconButton colorScheme="dark">
                            <IoCallOutline />
                        </IconButton>
                        <IconButton colorScheme="dark">
                            <IoVideocamOutline />
                        </IconButton>
                    </div>
                </div>

                {/* Middle */}
                <div className="flex-1 px-4 pt-12 pb-4 overflow-y-auto">
                    {fakeMessages.map((message, index) => (
                        <ChatMessage
                            key={index}
                            text={message.text}
                            sender={message.sender}
                            createdAt={message.createdAt}
                            isGroupChatMessage={message.isGroupChatMessage}
                            parent={message.parent}
                        />
                    ))}
                    <div ref={chatRef} className="h-4" />
                </div>

                {/* Bottom */}
                <div className="h-14 flex items-center border-t px-2  bg-one">
                    <IconButton rounded="full" colorScheme="dark">
                        <AiOutlineSmile />
                    </IconButton>
                    <IconButton rounded="full" colorScheme="dark">
                        <IoImageOutline />
                    </IconButton>

                    <IconButton rounded="full" colorScheme="dark">
                        <IoMicOutline />
                    </IconButton>
                    <div className="flex-1 mx-2">
                        <Input
                            hasMarginBottom={false}
                            placeholder="Ecrivez votre message ici"
                        />
                    </div>
                    <IconButton rounded="full" variant="filled">
                        <IoSend />
                    </IconButton>
                </div>
            </div>
            {/* <div className="flex-1 flex items-center justify-center">
          <BiLoaderAlt className="w-10 h-10 text-blue-600 animate-spin" />
        </div> */}
        </div>
    );
};

export default DiscussionPage;
