import { ApiResponseStatus } from "../types";

export interface CurrencyApiGeneralResponse {
	result: ApiResponseStatus
	documentation: string
	terms_of_use: string
	"terms-of-use"?: string
	"error-type"?: string
}

export type CurrencyConversionApiGeneralResponse = CurrencyApiGeneralResponse & {
	time_last_update_unix: number
	time_last_update_utc: string
	time_next_update_unix: number
	time_next_update_utc: string
	base_code: string
}

export type CurrencyConversionRate = CurrencyConversionApiGeneralResponse & {
	target_code: string
	conversion_rate: number
}

export type CurrencyConversionRates = CurrencyConversionApiGeneralResponse & {
	conversion_rates: {
		[key: string]: number
	}
}

export type CurrencyConversionCodes = CurrencyApiGeneralResponse & {
	supported_codes: [ string, string ][] // 0 = code, 1 = code detail
}