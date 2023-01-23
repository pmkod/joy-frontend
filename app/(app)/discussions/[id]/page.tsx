"use client"
import React, { useRef } from 'react'
import { useRouter } from "next/navigation"
import { AiOutlineSmile } from "react-icons/ai";
import {
  IoCallOutline,
  IoVideocamOutline,
  IoSend,
  IoMicOutline,
  IoImageOutline,
} from "react-icons/io5";
import { RiArrowLeftSLine } from 'react-icons/ri';

const DiscussionPage = () => {
  const router = useRouter()
  const chatRef = useRef<HTMLDivElement>(null);
  const goToDiscussionsPage = () => {
    router.push("/dscussions")
  }
  return (

    <div className="flex h-screen flex-1">
      <div className="flex flex-col h-full flex-1">
        {/* Top */}
        <div className="h-14 flex items-center justify-between pl-2 pr-4 border-b border-gray-200">
          {/* Top Left */}
          <div className="flex items-center">
            {/* <IconButton></IconButton> */}
            <button
              onClick={goToDiscussionsPage}
              className="rounded-full p-1 hover:bg-gray-200 mr-1.5 transition-colors"
            >
              <RiArrowLeftSLine className="w-6 h-auto" />
            </button>
            <div className="w-10 h-10 mr-3 sm:mr-2">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"

                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-96 sm:w-[20vh]">
              <div className="font-semibold mb-1 sm:text-sm">
                {/* {discussions.data[indexOfDisc].name} */}
                Yohan coulibaly
              </div>
              <div className="text-xs text-eight sm:text-xs truncate">
                En ligne
                {/* {discussions.data[indexOfDisc].isGroup &&
                  discussions.data[indexOfDisc].members.map((obj, index) => (
                    <span key={index}>{obj.member.fullName},</span>
                  ))} */}
              </div>
            </div>
          </div>
          {/* Top Right */}
          <div className="">
            <button className="rounded-full p-2 hover:bg-two transition-colors mr-2">
              <IoCallOutline className="w-6 h-auto" />
            </button>
            <button className="rounded-full p-2 hover:bg-two transition-colors">
              <IoVideocamOutline className="w-6 h-auto" />
            </button>
          </div>
        </div>

        {/* Middle */}
        <div className="flex-1 px-4 pt-12 pb-4 overflow-y-auto">
          {/* {discussions.data[indexOfDisc].messagesReversed &&
            discussions.data[indexOfDisc].messages.map((message, index) => (
              <TextMessage
                key={index}
                text={message.text}
                sender={message.sender}
                createdAt={message.createdAt}
                isGroupMessage={discussions.data[indexOfDisc].isGroup}
                parent={message.parent}
              />
            ))} */}
          <div ref={chatRef} className="h-4" />
        </div>

        {/* Bottom */}
        <div className="h-14 flex items-center border-t px-2 sticky bottom-0 bg-one">
          {/* <div className=''> */}
          <button className="rounded-full p-2.5 hover:bg-two transition-colors mr-1">
            <AiOutlineSmile className="w-6 h-auto" />
          </button>
          <button className="rounded-full p-2.5 hover:bg-two transition-colors mr-2">
            <IoImageOutline className="w-6 h-auto" />
          </button>

          <input
            type="text"
            className="flex-1 h-11 rounded-lg border border-five pl-4 mr-2 w-0"
            // ref={messageRef}
            required
            placeholder="Ecrivez un message"
          />

          <button className="rounded-full p-2.5 hover:bg-two transition-colors mr-2">
            <IoMicOutline className="w-6 h-auto" />
          </button>
          <button
            // onClick={sendMessage}
            className="rounded-full p-2.5 bg-primary hover:opacity-80 transition-all"
          >
            <IoSend className="w-5 h-auto text-one" />
          </button>
          {/* </div> */}
        </div>
      </div>
      {/* <div className="flex-1 flex items-center justify-center">
          <BiLoaderAlt className="w-10 h-10 text-blue-600 animate-spin" />
        </div> */}
    </div>
  )
}

export default DiscussionPage