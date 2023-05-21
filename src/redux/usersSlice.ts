import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { user } from '@/types/users';

const initialState: user = {
  id: "",
  name: "",
  image: ""
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<user>) => {
      state.id = action.payload.id
      state.name = action.payload.name
      state.image = action.payload.image
    }
  }
});

export const { setUser } =
  userSlice.actions;

export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;



