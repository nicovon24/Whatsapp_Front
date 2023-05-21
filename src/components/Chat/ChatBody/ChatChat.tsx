import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HRLineBreak from "../SubComponents/HRLineBreak";
import { IndividualChatProps } from "@/types/chats";
import { faClose, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { deleteChat } from "@/redux/actions/chats";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

//*Individual chat
export default function ChatChat(props: IndividualChatProps) {
	const [idShowDeleteBtn, setIdShowDeleteBtn] = useState("")
	const dispatch = useAppDispatch()

	const handleDeleteChat = (id: string) => {
		Swal.fire({
			title: 'Do you want to delete this chat?',
			icon: "question",
			showCancelButton: true,
			confirmButtonText: 'Yes',
			confirmButtonColor: "#005c4b",
			cancelButtonColor: "white",
			customClass: {
				actions: 'my-actions',
				cancelButton: 'order-1 right-gap text-black swal2-cancel',
				confirmButton: 'order-2',
			},
			background: "#34393b",
			color: "white",
		}).then((result: any) => {
			if (result.isConfirmed) {
				dispatch(deleteChat(id))
				setTimeout(() => {
					props?.setFlag(prev=>!prev)
					props.setSelectedChat({id: "", name: "", image: "", allChats: []})
				}, 500);
			}
		})
	}

	return (
		<div className="mt-2 flex flex-col">
			{props?.chats?.map((chat) => {
				const chats = chat?.allChats;
				const lastChat = chats?.[chats.length - 1]?.message;
				const slicedChat = lastChat?.substring(0, 40);
				const isSelected = props?.selectedChat?.id === chat.id;
				return (
					<div key={chat?.id}>
						<div className="overflow-y-auto">
							<div
							className={`flex items-center justify-between text-white overflow-hidden hover:bg-[#222e35] cursor-text p-3 duration-200 ${
								isSelected && "bg-[#2a3942]"
							}`}
							onClick={() => props.setSelectedChat(chat)}
							onMouseOver={()=>setIdShowDeleteBtn(chat?.id)}
							onMouseLeave={()=>setIdShowDeleteBtn("")}
						>
							<div className="flex">
								<img src={chat?.image} className="w-[3.2rem] h-12 rounded-full mr-3" />
								<div>
									<p className="text-[17px]">{chat?.name}</p>
									<span className="text-[13px] text-icon">{slicedChat}</span>
									<span className="text-[13px] text-icon">
										{lastChat?.length > 40 && "..."}
									</span>
								</div>
							</div>
							{chat?.id===idShowDeleteBtn && <div className="flex justify-end">
								<FontAwesomeIcon
									icon={faClose}
									className={`cursor-pointer w-[0.7rem] text-white relative z-[10000]`}
									onClick={()=>handleDeleteChat(chat?.id)}
								/>
							</div>}
						</div>
						</div>
						{!isSelected && <HRLineBreak />}
					</div>
				);
			})}
		</div>
	);
}
