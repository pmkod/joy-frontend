import React from "react";
import {
    RiAddLine,
    RiImage2Fill,
    RiImage2Line,
    RiMedalFill,
} from "react-icons/ri";
import { BiImageAlt } from "react-icons/bi";

const Story = () => {
    return (
        <div className="mr-4 cursor-pointer">
            <div className="rounded-full p-0.5 bg-violet-500">
                <div className="rounded-full w-14 h-14 overflow-hidden object-containe border-2 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="w-max mt-2 text-xs mx-auto text-gray-500">
                openze
            </div>
        </div>
    );
};

const StoriesSection = () => {
    return (
        <div className="flex hide-scrollbar overflow-x-auto rounded-3xl bg-white border border-gray-200 px-4 py-4 mt-8 mb-6">
            <div className="mr-4 cursor-pointer">
                <div className="bg-gray-200 w-max rounded-full p-0.5">
                    <div className="flex items-center justify-center border-white border-2 rounded-full w-14 h-14 bg-gray-200 relative">
                        {/* <BiImageAlt className='w-6 h-6 text-gray-300' /> */}
                        <div className="absolute -bottom-1 -right-1 p-0.5 border-2 border-white rounded-full bg-blue-600">
                            <RiAddLine className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>

                <div className="w-max mt-2 text-xs mx-auto text-gray-500">
                    Your story
                </div>
            </div>

            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
        </div>
    );
};

export default StoriesSection;
