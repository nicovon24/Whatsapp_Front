import { createChatProps, typeSetOpenModal } from "@/types/chats";
import CloudinaryUploadImg from "../CloudinaryUploadImg";
import React from "react";
import "../../../app/globals.css"
import { postChat } from "@/redux/actions/chats";
import { useAppDispatch } from "@/redux/hooks";
import swal from "sweetalert";

export default function CreateChat(props: createChatProps) {
	interface formData {name: string, image: string}
	const [data, setData] = React.useState<formData>({name: "", image: ""});
	const dispatch = useAppDispatch()

	function handleUploadIMG(image: string) {
		setData({...data, image: image});
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData({...data, name: e.target.value})
	}

	const handleCloseModal = () => {
		props.setOpenModal(false)
	};

	const handleSendForm = (e: React.SyntheticEvent) => {
		e.preventDefault()
		if(data.name && data.image){
			dispatch(postChat(data.name, data.image))
			handleCloseModal();
			setTimeout(() => {
				props?.setFlag(prev=>!prev)
			}, 500);
			swal({
				title: "Success",
				text:  "Chat created successfully",
				icon:  "success",
			})
		}
		else{
			swal({
				title: "Fail",
				text:  "Fill all the fields from the formulare, please",
				icon:  "warning",
			})
		}
	};

	return (
		<div
			id="defaultModal"
			aria-hidden="true"
			className={`fixed top-0 left-0 w-screen min-h-[100vh] flex justify-center items-center bg-[#19212c] bg-opacity-90
			z-[100000]
			`}
		>
		  {/* el de arriba es el fondo
			el de abajo es el modal, AGREGARLE ANIMACIÓN */}
			<div className={`z-[10000] bg-[#34393b] p-4 h-1/2 min-w-[400px] md:min-w-[420px] rounded-xl px-8 shadow-lg
			`}>
				<div className="flex items-start justify-between p-4 border-b rounded-dark:border-gray-600">
					<h3 className="text-xl font-semibold text-white">
						Add a chat to your messages
					</h3>
					<button
						type="button"
						className="text-icon duration-500 px-2 rounded-full text-2xl ml-auto justify-center items-center hover:text-white"
						data-modal-hide="defaultModal"
						onClick={() => handleCloseModal()}
					>
						x
					</button>
				</div>
				<hr className="border-gray-800 border-[1px] w-full"/>
				<form className="text-white flex flex-col leading-6 border-t-1" onSubmit={handleSendForm}>
					<label className="mt-2">Name</label>
					<input type="text" className="bg-chat-green px-2 py-2 mt-2 rounded-lg w-full focus:outline-0 cursor-text placeholder:text-gray-300 text-white"
					placeholder="Type the name:" onChange={handleInputChange} name="name" value={data?.name}/>

					<label className="pt-4">Image</label>
					<CloudinaryUploadImg onUpload={handleUploadIMG} section="Register"/>
				</form>
			</div>
		</div>
	);
}
