import React, { FC } from 'react';
import FlexStyle from "../../style/flex/Flex.module.sass";
import CurrencyFlag from "react-currency-flags";
import { Select, Typography } from "antd";
import { CurrencySelectProps } from "./types";

const { Option } = Select;
const { Text } = Typography;

const CurrencySelect: FC<CurrencySelectProps> = ({
	value,
	onChange,
	currencies,
	label,
	width
}) => {
	return (
		<>
			{ label && <Text strong className="mr-1">{ label }</Text> }

			<Select
				showSearch
				optionFilterProp="children"
				style={{ width: width || '100%' }}
				value={ value }
				onChange={ onChange }
				filterOption={
					(input, option) => option
						? String(option.key || '').toLowerCase().indexOf(input.toLowerCase()) >= 0
						: false
				}
			>
				{
					currencies.map(currency => (
						<Option
							key={ `${currency.codeDetail} ${currency.code}` }
							value={ currency.code }
						>
							<div className={ FlexStyle.FlexCenterBetween }>
								<div className={ FlexStyle.FlexCenterBetween }>
									<CurrencyFlag currency={ currency.code } size="md" className="mr-1" />

									<Text>{ currency.codeDetail }</Text>
								</div>

								<Text type="secondary">{ currency.code }</Text>
							</div>
						</Option>
					))
				}
			</Select>
		</>
	);
};

export default CurrencySelect;