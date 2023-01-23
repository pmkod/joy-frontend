import dayjs from "dayjs";
import Link from "next/link";

type MessageProps = {
  text: string;
  isGroupMessage: boolean;
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

const Message = ({
  text,
  sender,
  isGroupMessage,
  createdAt,
  parent,
}: MessageProps) => {
  const isCurrentUserMessage = sender.id === 1;
  return (
    <div
      className={`flex items-end rounded-xl px-3 py-2 mb-1 w-max max-w-sm lg:max-w-xs sm:max-w-[50vw] ${
        isCurrentUserMessage ? "bg-primary ml-auto" : "bg-two"
      }`}
    >
      <div>
        {isGroupMessage && !isCurrentUserMessage && (
          <div className="font-medium text-xs text-primary mb-1">
            <Link
              href={`/profile/${sender.userName}`}
              className="hover:underline"
            >
              {sender.fullName}
            </Link>
          </div>
        )}
        {parent && (
          <div className="bg-gray-200 border-b mb-0.5 border-primary px-2 pt-0.5 rounded-lg w-full">
            <Link
              href={`/profile/${parent.sender.userName}`}
              className="font-medium text-xs text-primary mb-1 hover:underline"
            >
              {parent.sender.fullName}
            </Link>
            <p
              className={`font-normal text-sm break-words ${
                isCurrentUserMessage ? "text-one" : "text-six"
              } ${parent.text.length < 40 && "mb-4"}`}
            >
              {parent.text}
            </p>
          </div>
        )}
        <p
          className={`font-normal text-sm break-words ${
            isCurrentUserMessage ? "text-one" : "text-ten"
          } ${text.length < 40 && "mb-4"}`}
        >
          {text}
        </p>
        {/* <div className='text-xs text'>10:80</div> */}
      </div>
      <div className="">
        <div
          className={`text-xs ${
            isCurrentUserMessage ? "text-two" : "text-eight"
          } ${text.length < 40 ? "ml-0" : "ml-0.5"}`}
        >
          {dayjs(createdAt).format("HH:mm")}
        </div>
      </div>
    </div>
  );
};

export default Message;
