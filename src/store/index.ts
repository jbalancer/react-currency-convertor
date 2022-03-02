import currencyReducer from "./currency/currencySlice";
import appMenuReducer from './app-menu/appMenuSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./types";

const rootReducer = combineReducers({
	currency: currencyReducer,
	appMenu: appMenuReducer
});

const store = configureStore({
	reducer: rootReducer
});

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;