import { CurrencyRateDetail } from "../../views/Currencies/types";
import { SelectProps } from "rc-select/lib/Select";

export interface CurrencyListProps {
	currencies: CurrencyRateDetail[]
	baseCurrency: string
}

export interface CurrencyItemProps extends Pick<CurrencyListProps, 'baseCurrency'>,
	CurrencyRateDetail {}

export interface CurrencySelectProps extends Pick<CurrencyListProps, 'currencies'>,
	Pick<SelectProps, 'value' | 'onChange'> {
	label?: string
	width?: string | number
}