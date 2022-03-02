import { Row, Col, InputNumber, Typography, Tag } from "antd";
import React, { FC, useEffect, useMemo, useState } from 'react';
import GridContainer from "../../components/UI/Container/GridContainer";
import CurrencySelect from "../../components/Currency/CurrencySelect";
import { CurrencyRateDetail } from "./types";
import { useCurrenciesRateDetail } from "../../hooks/currency/useCurrenciesRateDetail";
import { useCurrenciesFetcher } from "../../hooks/currency/useCurrenciesFetcher";
import FlexStyle from '../../style/flex/Flex.module.sass';
import { $getCurrencyConversionRate } from "../../api/currencies/currency";

const { Text } = Typography;

const CurrencyConversion: FC = () => {
	const [ amount, setAmount ] = useState<number>(1);
	const [ rate, setRate ] = useState<number>(1);
	const [ baseCurrency, setBaseCurrency ] = useState<string>('USD');
	const [ toCurrency, setToCurrency ] = useState<string>('UZS');
	const [ rateLoading, setRateLoading ] = useState<boolean>(false);
	const realAmount = useMemo(() => amount || 1, [ amount ]);
	const calculatedAmount = useMemo(() => realAmount * rate, [ realAmount, rate ]);
	const currencies: CurrencyRateDetail[] = useCurrenciesRateDetail();

	useCurrenciesFetcher(baseCurrency);

	useEffect(() => {
		setRateLoading(true);

		$getCurrencyConversionRate(baseCurrency, toCurrency).then(newRate => {
			setRate(newRate);

			setRateLoading(false);
		});
	}, [ baseCurrency, toCurrency ]);

	return (
		<GridContainer className="mt-2">
			<Row gutter={ [ 24, 24 ] }>
				<Col span={ 12 }>
					<div className={ FlexStyle.FlexCenter }>
						<Text strong className="mr-1">Сумма</Text>

						<InputNumber
							value={ amount }
							step={ 100 }
							min={ 1 }
							maxLength={ 18 }
							style={{ width: '100%' }}
							onChange={ setAmount }
						/>
					</div>
				</Col>

				<Col span={ 12 }>
					<Tag color="geekblue" style={{ lineHeight: '30px', width: '100%', fontSize: 14 }}>
						<Text strong className="mr-1">Результат:</Text>

						{ `${realAmount.toLocaleString('ru')} ${baseCurrency} = ${rateLoading ? '...' : calculatedAmount.toLocaleString('ru')} ${toCurrency}` }
					</Tag>
				</Col>

				<Col span={ 12 }>
					<div className={ FlexStyle.FlexCenter }>
						<CurrencySelect
							label="С"
							value={ baseCurrency }
							onChange={ setBaseCurrency }
							currencies={ currencies }
						/>
					</div>
				</Col>

				<Col span={ 12 }>
					<div className={ FlexStyle.FlexCenter }>
						<CurrencySelect
							label="На"
							value={ toCurrency }
							onChange={ setToCurrency }
							currencies={ currencies }
						/>
					</div>
				</Col>
			</Row>
		</GridContainer>
	);
};

export default CurrencyConversion;