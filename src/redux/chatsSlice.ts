import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { chat, chatsSliceProps, message, payloadChat } from '@/types/chats';

const initialState: chatsSliceProps = {
  allChats: []
};

export const chatsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setChats: (state, action: any) => {
      state.allChats = action.payload
    },
    // addChat: (state, action: PayloadAction<payloadChat>) => {
    //   const {id, message, person, date} = action.payload
    //   const obj = {id, message, person, date}

    //   const map = state.allChats.map(chat=>{
    //     if(chat.id===id) return {...chat, allChats: [...chat.allChats, obj]}
    //     return chat
    //   })

    //   state.allChats = map
    // }
  }
});

export const { setChats } = chatsSlice.actions;

export default chatsSlice.reducer;



