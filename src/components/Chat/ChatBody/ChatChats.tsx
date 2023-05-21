import React from "react";
import ChatChat from "./ChatChat";
// import chats from "@/data/chats";
import ChatSearch from "./ChatSearch";
import { useAppSelector } from "@/redux/hooks";

//*All chats
const ChatChats = (props: any) => {
  const {allChats} = useAppSelector(s=>s.chats)

	return (
    <div className="bg-chats-background w-full overflow-y-auto mt-2 h-full px-3 py-2 border-r-[1px] border-[#333a3e]">
      <ChatSearch/>

      <ChatChat chats={allChats} selectedChat={props.selectedChat} setSelectedChat={props.setSelectedChat} setFlag={props?.setFlag}/>
    </div>
  );
};

export default ChatChats;
