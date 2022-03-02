import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CurrencySliceState } from "./types";
import { SliceCaseReducers } from "@reduxjs/toolkit/src/createSlice";
import { RootState } from "../types";
import { $getCurrencyConversionCodes, $getCurrencyConversionRates } from "../../api/currencies/currency";
import { CurrencyConversionCodes, CurrencyConversionRates } from "../../api/currencies/types";

export const fetchCurrencyRates = createAsyncThunk<CurrencyConversionRates['conversion_rates'], string>(
	'currency/fetchRates',
	(currencyCode: string) => $getCurrencyConversionRates(currencyCode)
);

export const fetchCurrencyCodes = createAsyncThunk<CurrencyConversionCodes['supported_codes']>(
	'currency/fetchCodes',
	$getCurrencyConversionCodes
);

const currencySlice = createSlice<CurrencySliceState, SliceCaseReducers<CurrencySliceState>>({
	name: 'currency',
	initialState: {
		rates: {},
		codes: []
	},
	reducers: {},
	extraReducers: builder => builder
		.addCase(
			fetchCurrencyRates.fulfilled,
			(state, { payload }) => {
				state.rates = payload;
			}
		)
		.addCase(
			fetchCurrencyCodes.fulfilled,
			(state, { payload }) => {
				state.codes = payload;
			}
		)
});

export const selectCurrencyRates = ({ currency }: RootState): CurrencyConversionRates['conversion_rates'] => currency.rates;

export const selectCurrencyCodes = ({ currency }: RootState): CurrencyConversionCodes['supported_codes'] => currency.codes;

export default currencySlice.reducer;