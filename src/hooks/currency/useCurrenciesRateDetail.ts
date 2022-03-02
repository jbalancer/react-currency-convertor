import { useAppSelector } from "../../store";
import { selectCurrencyCodes, selectCurrencyRates } from "../../store/currency/currencySlice";
import { CurrencyRateDetail } from "../../views/Currencies/types";
import { useMemo } from "react";
import { objectIsEmpty } from "../../utils/object";

export const useCurrenciesRateDetail = (): CurrencyRateDetail[] => {
	const currencyRates = useAppSelector(selectCurrencyRates);
	const currencyCodes = useAppSelector(selectCurrencyCodes);

	return useMemo(() => {
		const currenciesList: CurrencyRateDetail[] = [];

		if (!objectIsEmpty(currencyRates) && currencyCodes.length) {
			currencyCodes.forEach(i => {
				currenciesList.push({
					code: i[0],
					codeDetail: i[1],
					rate: currencyRates[i[0]]
				});
			});
		}

		return currenciesList;
	}, [ currencyRates, currencyCodes ]);
};