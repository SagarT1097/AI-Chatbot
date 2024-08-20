import React from "react";

const ChatHeader = () => {
  return (
    <div className="w=full flex gap-3 justify-start items-center text-zinc-800">
      <div className="flex flex-col items-start text-sm">
        <p className="text-xs">
          Second commit creating pull request test hellow whattt test
        </p>
        <div className="flex gap-1.5 items-center">
          <p className="w-2 h-2 rounded-full bg-green-500" />
          <p className="font-medium">Our OpenAI Integrated Chatbot</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
