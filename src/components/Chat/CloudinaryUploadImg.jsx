import { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

export default function CloudinaryUploadImg({ onUpload, section }) {
	const [imageSelected, setImageSelected] = useState("");
	const [image, setImage] = useState("");

	const uploadImage = () => {
		const formData = new FormData();
		formData.append("file", imageSelected);
		formData.append("upload_preset", "hhh8ils9");

		axios
			.post("https://api.cloudinary.com/v1_1/ds1yttr6f/image/upload", formData)
			.then((response) => {
				setImage(response.data.secure_url);
			});
	};

	useEffect(() => {
		if (image) {
			onUpload(image);
		}
	}, [image]);

	return (
		<div>
			<div>
				<div className={`relative flex flex-col items-start text-white`}>
					<div className="shrink-0">
						<label htmlFor="about" className={`block text-sm font-medium leading-6`}>
							{image && (
								<>
									<img
										class="object-cover rounded-full w-20 h-20"
										src={image}
										alt="imagen cargada"
									/>
									Foto seleccionada
								</>
							)}
						</label>
					</div>
					<div className="flex items-center mt-6 mb-8">
						<label>
							<span className="sr-only">Selecciona una foto de perfil</span>
							<input
								type="file"
								className="block text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-chat-green file:text-white file:lighter-blue hover:file:bg-white  file:hover:text-black file:duration-500 file:cursor-pointer"
								accept=".png, .jpg, .jpeg .webp .gif. .svg"
								name=""
								id=""
								onChange={(e) => {
									setImageSelected(e.target.files[0]);
								}}
							/>
						</label>

						<button
							type="button"
							className="header mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold h-fit bg-chat-green hover:bg-white hover:text-black duration-500"
							onClick={uploadImage}
						>
							Upload image
						</button>
					</div>
					<hr className="border-gray-300 border-[1px] w-full"/>
					<div className="w-full flex justify-end pt-3">
						<button
							type="submit"
							className="header mb-6 mr-4 py-2 px-4 rounded-2xl border-0 text-md font-semibold h-fit hover:bg-white hover:text-black bg-chat-green duration-500"
							onClick={uploadImage}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
