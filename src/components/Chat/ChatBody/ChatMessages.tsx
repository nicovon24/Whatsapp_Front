import { chat, chatMessagesProps } from "@/types/chats";
import React, { useEffect, useState } from "react";
import "../../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faFaceSmile,
	faPaperclip,
	faMicrophone,
	faSearch,
	faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/redux/hooks";
import "../../../app/globals.css";
import { MarketSVG } from "../SVG";

const ChatMessages = (props: chatMessagesProps) => {
	const chat = useAppSelector((s) => s.chats?.allChats);
	const chats = chat?.find((el) => el.id === props?.selectedChat?.id)?.allChats;

	useEffect(() => {
		if (props.messageListRef.current) {
			const messageListElement = props.messageListRef.current;
			messageListElement.scrollTop = messageListElement.scrollHeight;
		}
	}, [chats]);

	return (
		<div
			id="slider"
			className="bg-chat max-h-[95vh] flex flex-col justify-between gap-1"
		>
			{/* header messages, contact, etc */}
			<div className="bg-secondary-background w-full flex items-center pl-4 pr-8 py-2">
				<div className="flex items-center justify-between w-full">
					<div className="flex items-center">
						<img
							src={props?.selectedChat?.image}
							className="w-[45px] h-[45px] rounded-full"
						/>
						<span className="text-white pl-3 text-md">
							{props?.selectedChat?.name}
						</span>
					</div>

					{/* market */}
					<div className="flex items-center gap-6">
						<MarketSVG />

						<FontAwesomeIcon icon={faSearch} className="text-icon text-[18px]" />

						<FontAwesomeIcon
							icon={faEllipsisVertical}
							className="text-icon text-[18px] pl-2"
						/>
					</div>
				</div>
			</div>

			{/* messages and send message */}
			<div className="">
				<div className="h-[77vh] flex flex-col justify-end">
					<div
						className="overflow-y-auto scroll scroll-smooth whitespace-nowrap "
						ref={props.messageListRef}
					>
						{/* all chats container */}
						{chats?.map((chat) => {
							const justify = chat?.person === "Me" ? "justify-end" : "justify-start";
							const color =
								chat?.person === "Me" ? "bg-[#005c4b]" : "bg-secondary-background";
							const date = new Date(chat?.date);
							const time = date?.getHours() + ":" + date?.getMinutes();
							return (
								<div className={`text-white flex ${justify} p-3`}>
									{/* single chat */}
									<div
										className={`${color} flex md:max-w-[40%] rounded-md px-4 pt-2 pb-3`}
									>
										<span className="text-white whitespace-pre-line truncate">
											{chat?.message}
										</span>
										<div className="relative left-3 top-[8px] flex justify-end items-end">
											<span className="text-[11px] text-icon pr-1">{time}</span>
											{/* visto */}
											{chat?.person === "Me" && (
												<>
													<FontAwesomeIcon
														icon={faCheck}
														className="w-[11px] relative z-10"
													/>
													<FontAwesomeIcon
														icon={faCheck}
														className="w-[11px] relative right-[0.35rem]"
													/>
												</>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* send message */}
				<div className="w-full z-100 h-[5rem] mb-3 bg-secondary-background flex items-center px-4 gap-3">
					<div className="flex">
						<FontAwesomeIcon
							icon={faFaceSmile}
							className="text-icon text-[25px] w-[25px] mr-7"
						/>
						<FontAwesomeIcon
							icon={faPaperclip}
							className="text-icon text-[22px] w-[22px]"
						/>
					</div>
					<div className="pl-4 w-full mr-3 text-white">
						<input
							type="text"
							className="bg-[#2a3942] w-full rounded-md px-[8px] py-[8px] md:py-[10px] outline-0"
							placeholder="Type a message here..."
							onChange={(e) => props.setMessage(e.target.value)}
							onKeyDown={props.onPressSend}
							value={props.message}
						/>
					</div>
					<FontAwesomeIcon
						icon={faMicrophone}
						className="text-icon text-[25px] w-[25px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default ChatMessages;
