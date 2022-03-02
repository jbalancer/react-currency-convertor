import { createElement } from "react";
import { PathRouteProps } from 'react-router-dom';
import CurrenciesList from "../../views/Currencies/CurrenciesList";
import CurrencyConversion from "../../views/Currencies/CurrencyConversion";

export default [
	{
		path: '/',
		element: createElement(CurrencyConversion)
	},
	{
		path: '/list',
		element: createElement(CurrenciesList)
	}
] as PathRouteProps[];