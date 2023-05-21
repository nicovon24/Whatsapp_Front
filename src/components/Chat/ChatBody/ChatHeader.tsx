import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUsers,
	faMessage,
	faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/redux/hooks";
import { headerChatProps, typeSetOpenModal } from "@/types/chats";
import { Transition } from "@headlessui/react";
import { GroupsSVG, MessagesSVG, StoriesSVG } from "../SVG";

const ChatHeader = (props: headerChatProps) => {
	const { image } = useAppSelector((s) => s.user);

	const handleClickNewChat = () => {
		props.setOpenModal(true);
		props.setIsOpenHeaderMenu(false);
	};

	return (
		<div className="w-full px-6">
			{/* img and icons */}
			<div className="pl-2 pt-2 flex justify-between items-center text-icon ">
				<img src={image} className="w-[45px] rounded-full" />

				<div className="flex items-center gap-10">
					{/* groups icon */}
					<GroupsSVG/>

					{/* historias icon */}
					<StoriesSVG/>

					{/* messages icon */}
					<MessagesSVG/>

					<div>
						<FontAwesomeIcon
							icon={faEllipsisVertical}
							className={`cursor-pointer w-[0.4rem]`}
							onClick={() => props.setIsOpenHeaderMenu((prev) => !prev)}
						/>

						{/* transition animation */}
						<Transition
							show={props.isOpenHeaderMenu}
							enter="transition-opacity duration-1000"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity duration-1000"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className={`absolute z-[10000] w-[400px] text-[16px] text-icon`}>
								<ul
									className={`bg-[#233138] shadow-sm shadow-gray-600 relative right-[177px] top-1 flex flex-col w-1/2 py-3 rounded-[5px]`}
								>
									<li
										className="hover:bg-[#182229] cursor-pointer py-2 px-5"
										onClick={() => handleClickNewChat()}
									>
										Nuevo Chat
									</li>
									<li className="hover:bg-[#182229] cursor-pointer py-2 px-5">
										Mensajes destacados
									</li>
									<li className="hover:bg-[#182229] cursor-pointer py-2 px-5">
										Cerrar Sesión
									</li>
								</ul>
							</div>
						</Transition>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatHeader;
