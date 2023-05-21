import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatComputer from "./ChatComputer";
import ChatMessages from "./ChatMessages";
import chats from "@/data/chats";
import ChatChats from "./ChatChats";
import { useAppDispatch } from "@/redux/hooks";
import { getChatsData, sendMessage } from "@/redux/actions/chats";
// import swal from "sweetalert";
import CreateChat from "./CreateChat";
import { Transition } from '@headlessui/react'

const ChatBody = () => {
	const [selectedChat, setSelectedChat] = useState({id: "", name: "", image: "", allChats: []});
	const [message, setMessage] = React.useState("");
	const dispatch = useAppDispatch();
	const messageListRef: any = React.useRef();
	const [flag, setFlag] = useState(false)
	const [openModal, setOpenModal] = useState(false)
	const [isOpenHeaderMenu, setIsOpenHeaderMenu] = React.useState(false)

	//todo message send functions and effect
	//*moving scroll to last message at first
	React.useEffect(() => {
		if (messageListRef.current) {
			const messageListElement = messageListRef.current;
			messageListElement.scrollTop = messageListElement.scrollHeight;
		}
		setMessage(""); //clearing msg after each chat selection change
	}, [selectedChat]);

	const handlePressSend = (e: any) => {
		if (e.key === "Enter" && message !== "") {
			dispatch(sendMessage(message, selectedChat?.id)).then(() => {
				setFlag(prev=>!prev)
				setMessage("")
			});
		}
	};

	//*getting updated data after message send
	React.useEffect(()=>{
		dispatch(getChatsData())
	}, [flag])

	return (
		<div>
			{/* chat screen */}
			{/* https://i.pinimg.com/originals/3e/e2/bc/3ee2bc042a4b739dffe83b5ad47b4dd4.jpg
			background img when you show a chat */}
			<div
				className="bg-secondary-background w-[90vw] mx-auto 
				grid md:grid-cols-[0.6fr,1fr] xl:grid-cols-[0.5fr,1fr] 2xl:grid-cols-[0.4fr,1fr]
				"
			>
				{/* left col, profile and chats*/}
				<div className="w-full h-[88vh] border-r-[1px] border-[#333a3e]">
					<ChatHeader setOpenModal={setOpenModal} isOpenHeaderMenu={isOpenHeaderMenu} setIsOpenHeaderMenu={setIsOpenHeaderMenu}/>
					<ChatChats selectedChat={selectedChat} setSelectedChat={setSelectedChat} setFlag={setFlag}/>
				</div>

				{/* right col, msg */}
				{!selectedChat.id ? (
					<ChatComputer />
				) : (
					<ChatMessages selectedChat={selectedChat} messageListRef={messageListRef} message={message} onPressSend={handlePressSend} setMessage={setMessage}/>
				)}
				
				{/* transition animation in modal appereance */}
				<Transition
        show={openModal}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
				<CreateChat openModal={openModal} setOpenModal={setOpenModal} setFlag={setFlag}/>
      </Transition>
			</div>
		</div>
	);
};

export default ChatBody;
