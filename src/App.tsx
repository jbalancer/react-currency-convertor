import React, { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/Bar/AppBar";
import routes from './router';
import Title from "antd/lib/typography/Title";
import GridContainer from "./components/UI/Container/GridContainer";
import { Divider } from "antd";

const App: FC = () => {
	return (
		<div className="pb-3">
			<GridContainer className="my-2">
				<Title level={ 2 }>Конвертер валют</Title>
			</GridContainer>

			<Divider className="my-1" />

			<AppBar />

			<Divider className="my-1" />

			<Routes>
				{
					routes.map((routeProps, index) =>
						<Route key={'route-' + index} { ...routeProps } />)
				}
			</Routes>
		</div>
	);
}

export default App;
