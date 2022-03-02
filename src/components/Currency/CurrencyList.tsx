import React, { FC, ReactElement } from 'react';
import { CurrencyListProps } from "./types";
import CurrencyItem from "./CurrencyItem";

const CurrencyList: FC<CurrencyListProps> = ({ currencies, baseCurrency }) => {
	return (
		<>
			{
				// .reduce() против .map().filter()

				currencies.reduce((filteredCurrencies: ReactElement[], currency) => {
					currency.code !== baseCurrency
						&& filteredCurrencies.push(
							<CurrencyItem key={ currency.code } baseCurrency={ baseCurrency } { ...currency } />
						);

					return filteredCurrencies;
				}, [])
			}
		</>
	);
};

export default CurrencyList;