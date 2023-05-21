import ChatBody from "./ChatBody/ChatBody";
import "tailwindcss/tailwind.css"
import { useDispatch } from "react-redux/es/exports";
import React from "react"
import {getUserData} from "../../redux/actions/users"
import { useAppDispatch } from "@/redux/hooks";
import { getChatsData } from "@/redux/actions/chats";

export default function Chat() {
  const dispatch = useAppDispatch()

  React.useEffect(()=>{
    dispatch(getUserData())
    dispatch(getChatsData())
  }, [])

  return (
    <div>
      {/* green screen */}
      <div className="absolute bg-main-green w-full h-[8rem]">
        
      </div>

      <div className="absolute bottom-0 z-10 bg-main-green w-full h-[8rem]">
        
      </div>
    
      {/* chat screen */}
      <div className="relative z-10 top-[25px] ">
        <ChatBody/>
      </div>
    </div>
  )
}
