import React, { FC, useEffect, useState } from 'react';
import GridContainer from '../../components/UI/Container/GridContainer';
import { useCurrenciesRateDetail } from "../../hooks/currency/useCurrenciesRateDetail";
import { CurrencyRateDetail } from "./types";
import CurrencyList from "../../components/Currency/CurrencyList";
import CurrencySelect from "../../components/Currency/CurrencySelect";
import { useCurrenciesFetcher } from "../../hooks/currency/useCurrenciesFetcher";

const CURRENCY_UPDATE_INTERVAL_IN_SECONDS = 15;

const CurrenciesList: FC = () => {
	const [ baseCurrency, setBaseCurrency ] = useState<string>('USD');
	const currencies: CurrencyRateDetail[] = useCurrenciesRateDetail();
	const fetchCurrencies = useCurrenciesFetcher(baseCurrency);

	useEffect(() => {
		const currenciesUpdateInterval = setInterval(fetchCurrencies, CURRENCY_UPDATE_INTERVAL_IN_SECONDS * 1000);

		return () => clearInterval(currenciesUpdateInterval);
	}, [ baseCurrency ]);

	return (
		<GridContainer>
			<div style={{ display: 'flex', alignItems: 'center' }} className="mb-2 mt-2">
				<CurrencySelect
					label="Базовая валюта"
					width={ 300 }
					value={ baseCurrency }
					currencies={ currencies }
					onChange={ setBaseCurrency }
				/>
			</div>

			<CurrencyList currencies={ currencies } baseCurrency={ baseCurrency } />
		</GridContainer>
	);
};

export default CurrenciesList;