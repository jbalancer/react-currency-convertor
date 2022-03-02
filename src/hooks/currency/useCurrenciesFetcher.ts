import { fetchCurrencyCodes, fetchCurrencyRates } from "../../store/currency/currencySlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";

export const useCurrenciesFetcher = (baseCurrency: string) => {
	const dispatch = useAppDispatch();

	const fetchCurrencies = () => {
		dispatch(fetchCurrencyRates(baseCurrency));

		dispatch(fetchCurrencyCodes());
	};

	useEffect(() => {
		fetchCurrencies();
	}, [ baseCurrency ]);

	return fetchCurrencies;
}