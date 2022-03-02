import { CurrencyConversionCodes, CurrencyConversionRates } from "../../api/currencies/types";

export interface CurrencySliceState {
	rates: CurrencyConversionRates['conversion_rates']
	codes: CurrencyConversionCodes['supported_codes']
}