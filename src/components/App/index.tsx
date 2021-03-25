import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import List from '@material-ui/core/List';
import Menu from "../Menu";
import { Switch, Route, useLocation } from "react-router-dom";
import './App.css';
import Calendar from "../../pages/Calendar";
import Profile from "../../pages/Profile";
import Tickets from "../../pages/Tickets";
import { menuList } from "../../utils/const";

const getTitle = (path: string): string => {
	const pathname = path.slice(1);
	if (pathname && menuList[pathname]) {
		return menuList[pathname];
	}

	return menuList.calendar;
}

const App = () => {
	const location = useLocation();
	const title = getTitle(location.pathname);

	return (
		<div className="app">
			<Drawer variant="permanent" classes={{paper: "menu"}}>
				<List><Menu title={title}/></List>
			</Drawer>
			<main className="content">
				<AppBar position="absolute" color="secondary" className="app-bar">
					<Typography component="h1" variant="h6" color="inherit" noWrap className="title">
						{title}
					</Typography>
				</AppBar>
				<Container maxWidth="lg" className="container">
					<Switch>
						<Route exact path="/" component={Calendar} />
						<Route path={`/${menuList.profile}`} component={Profile} />
						<Route path={`/${menuList.tickets}`} component={Tickets} />
					</Switch>
				</Container>
			</main>
		</div>
	);
}

export default App;
