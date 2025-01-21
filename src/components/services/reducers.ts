import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
	value: number;
}

interface UserDetails {
	email?: string;
	password?: string
}

const initialState = {
	value: 0,
	currentUser: {} as UserDetails | any
};

export const Reducers = createSlice({
	name: "Koa-ecomerce",
	initialState,
	reducers: {
		updateUserDetails: (state, action: PayloadAction<UserDetails>) => {
			state.currentUser = action.payload
		},

		logoutUser: () => initialState,
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount, updateUserDetails, logoutUser } = Reducers.actions;

export default Reducers.reducer;
