import { createSlice } from "@reduxjs/toolkit";
import { AppMenuState } from "./types";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { RootState } from "../types";

const appMenuSlice = createSlice<AppMenuState, SliceCaseReducers<AppMenuState>>({
	name: 'appMenu',
	initialState: {
		menu: [
			{
				path: '/',
				text: 'Конвертация'
			},
			{
				path: '/list',
				text: 'Курсы валют'
			}
		]
	},
	reducers: {}
});

export const selectAppMenu = ({ appMenu }: RootState) => appMenu.menu;

export default appMenuSlice.reducer;