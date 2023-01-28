import dayjs from "dayjs";
import Link from "next/link";

export type ChatMessageProps = {
  text: string;
  isGroupChatMessage: boolean;
  sender: {
    id: number;
    fullName: string;
    userName: string;
  };
  createdAt: string;
  parent?: {
    text: string;
    sender: {
      id: number;
      fullName: string;
      userName: string;
    };
  };
};

const ChatMessage = ({
  text,
  sender,
  isGroupChatMessage,
  createdAt,
  parent,
}: ChatMessageProps) => {
  const isCurrentUserChatMessage = sender.id === 1;
  return (
    <div
      className={`flex items-end rounded-xl px-3 py-2 mb-1 w-max max-w-sm lg:max-w-xs sm:max-w-[50vw] ${
        isCurrentUserChatMessage ? "bg-blue-500 ml-auto" : "bg-gray-200"
      }`}
    >
      <div>
        {isGroupChatMessage && !isCurrentUserChatMessage && (
          <div className="font-medium text-xs text-blue-500 mb-1">
            <Link
              href={`/profile/${sender.userName}`}
              className="hover:underline"
            >
              {sender.fullName}
            </Link>
          </div>
        )}
        {parent && (
          <div className="bg-gray-200 border-b mb-0.5 border-blue-500 px-2 pt-0.5 rounded-lg w-full">
            <Link
              href={`/profile/${parent.sender.userName}`}
              className="font-medium text-xs text-blue-500 mb-1 hover:underline"
            >
              {parent.sender.fullName}
            </Link>
            <p
              className={`font-normal text-sm break-words ${
                isCurrentUserChatMessage ? "text-white" : "text-gray-600"
              } ${parent.text.length < 40 && "mb-4"}`}
            >
              {parent.text}
            </p>
          </div>
        )}
        <p
          className={`font-normal text-sm break-words ${
            isCurrentUserChatMessage ? "text-white" : "text-gray-900"
          } ${text.length < 40 && "mb-4"}`}
        >
          {text}
        </p>
        {/* <div className='text-xs text'>10:80</div> */}
      </div>
      <div className="">
        <div
          className={`text-xs ${
            isCurrentUserChatMessage ? "text-gray-200" : "text-gray-800"
          } ${text.length < 40 ? "ml-0" : "ml-0.5"}`}
        >
          {dayjs(createdAt).format("HH:mm")}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
