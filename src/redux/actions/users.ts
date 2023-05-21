import axios from "axios";
import { setUser } from "../usersSlice";

export const getUserData = () => async (dispatch: any) => {
	try {
		const response = await axios("/users");
		dispatch(setUser(response.data[0]));
	} catch (error) {
		return error
	}
};
