import React, { Dispatch, SetStateAction } from "react";

export enum personEnum {
  me = "Me", other = "Other"
}

export interface message {
  message: string,
  person: personEnum,
  date: Date | string
}

export interface chat {
  id: string | "",
  name: string,
  image: string,
  allChats: message[] | [],
}

export interface IndividualChatProps {
  chats: chat[] | [],
  selectedChat: chat | undefined,
  setSelectedChat: Dispatch<SetStateAction<chat>>;
  setFlag: Dispatch<SetStateAction<boolean>>;
}

export interface chatsSliceProps{
  allChats: chat[]
}

export interface headerChatProps {
  setIsOpenHeaderMenu: typeSetOpenModal,
  setOpenModal: typeSetOpenModal,
  isOpenHeaderMenu: boolean
}

export interface createChatProps {
  setOpenModal: typeSetOpenModal, 
  openModal: boolean, 
  setFlag: typeSetOpenModal
}

export interface chatMessagesProps {
	selectedChat: chat | undefined;
	message: string;
	messageListRef: any;
	onPressSend: any;
	setMessage: any;
}

export interface payloadChat {
  id: string,
  message: string,
  person: personEnum,
  date: Date | string
}

export type typeSetOpenModal = Dispatch<SetStateAction<boolean>>;