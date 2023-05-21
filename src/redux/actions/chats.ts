import axios from "axios";
import { setChats } from "../chatsSlice";
import { Dispatch } from "react";

export const getChatsData = () => async (dispatch: Dispatch<any>) => {
	try {
		const response = await axios("/chats");
		dispatch(setChats(response.data));
	} catch (error) {
		return error
	}
};

export const sendMessage = (message: string, id: string) => async () => {
	try {
		await axios.put(`/chats/${id}`,
			{ message, person: "Me" },
		);
	} catch (error) {
		return error
	}
};

export const postChat = (name: string, image: string) => async () => {
	try {
		await axios.post(`/chats`,
			{ name, image },
		);
	} catch (error) {
		return error
	}
};

export const deleteChat = (id: string) => async () => {
	try {
		await axios.delete(`/chats/${id}`);
	} catch (error) {
		return error
	}
};