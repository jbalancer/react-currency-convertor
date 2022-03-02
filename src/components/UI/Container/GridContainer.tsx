import React, { FC } from 'react';
import GridContainerStyle from './GridContainer.module.sass';
import { GridContainerProps } from "./types";

const GridContainer: FC<GridContainerProps> = ({ children, className }) => {
	return (
		<div className={ GridContainerStyle.GridContainer + ' ' + (className || '') }>{ children }</div>
	);
};

export default GridContainer;