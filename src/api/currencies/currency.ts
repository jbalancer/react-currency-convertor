import api from '../index';
import { CurrencyConversionCodes, CurrencyConversionRate, CurrencyConversionRates } from "./types";

export const $getCurrencyConversionRates = (
	currencyCode: string
): Promise<CurrencyConversionRates['conversion_rates']> => api
	.get<CurrencyConversionRates>('latest/' + currencyCode)
	.then(r => r?.conversion_rates || {});

export const $getCurrencyConversionRate = (
	currencyCodeFrom: string,
	currencyCodeTo: string
): Promise<number> => api
	.get<CurrencyConversionRate>(`pair/${currencyCodeFrom}/${currencyCodeTo}`)
	.then(r => r?.conversion_rate || 0);

export const $getCurrencyConversionCodes = (): Promise<CurrencyConversionCodes['supported_codes']> => api
	.get<CurrencyConversionCodes>('codes')
	.then(r => r?.supported_codes || []);