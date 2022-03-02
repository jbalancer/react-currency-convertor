import React, { FC } from 'react';
import GridContainer from "../UI/Container/GridContainer";
import { Button, Space } from 'antd';
import { AppMenuLink } from "../../store/app-menu/types";
import { useAppSelector } from "../../store";
import { selectAppMenu } from "../../store/app-menu/appMenuSlice";
import { useLocation, useNavigate } from "react-router-dom";

const AppBar: FC = () => {
	const appMenu: AppMenuLink[] = useAppSelector(selectAppMenu);
	const appLocation = useLocation();
	const navigate = useNavigate();

	return (
		<header>
			<GridContainer>
				<Space size={ 12 }>
					{
						appMenu.map(menu => (
							<Button
								key={ menu.path }
								type={ appLocation.pathname === menu.path ? 'default' : 'link' }
								onClick={ () => navigate(menu.path) }
							>
								{ menu.text }
							</Button>
						))
					}
				</Space>
			</GridContainer>
		</header>
	);
};

export default AppBar;