import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";
import { menuList } from "../../utils/const";
import './Menu.css';

type MenuType = {
	title: string
}

const Menu = ({title}: MenuType) => {
	return (
		<div>
			<ListItem button>
				<ListItemIcon>
					<PersonIcon color={title === menuList.profile ? 'secondary' : 'inherit'}/>
				</ListItemIcon>
				<Link to={`/${menuList.profile}`}>
					<ListItemText primary={menuList.profile} />
				</Link>
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<EventNoteIcon color={title === menuList.calendar ? 'secondary' : 'inherit'}/>
				</ListItemIcon>
				<Link to="/">
					<ListItemText primary={menuList.calendar} />
				</Link>
			</ListItem>
			<ListItem button>
				<ListItemIcon>
					<ListIcon color={title === menuList.tickets ? 'secondary' : 'inherit'} />
				</ListItemIcon>
				<Link to={`/${menuList.tickets}`}>
					<ListItemText primary={menuList.tickets} />
				</Link>
			</ListItem>
		</div>
	)
};

export default Menu;