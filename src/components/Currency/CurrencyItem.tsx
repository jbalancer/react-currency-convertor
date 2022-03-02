import React, { FC } from 'react';
import Meta from "antd/lib/card/Meta";
import CurrencyFlag from "react-currency-flags";
import { Card, Typography } from "antd";
import FlexStyle from '../../style/flex/Flex.module.sass';
import { CurrencyItemProps } from "./types";

const { Text } = Typography;

const CurrencyItem: FC<CurrencyItemProps> = ({
	code,
	codeDetail,
	rate,
	baseCurrency
}) => {
	return (
		<Card
			style={{ marginTop: 16 }}
			key={ code }
			size="small"
		>
			<div className={ FlexStyle.FlexCenterBetween }>
				<Meta
					avatar={ <CurrencyFlag currency={ code } size="lg" className="mt-1" /> }
					title={ codeDetail }
					description={ code }
					className="mr-2"
				/>

				<Text strong>{ rate.toLocaleString('ru') + " " + baseCurrency }</Text>
			</div>
		</Card>
	);
};

export default CurrencyItem;