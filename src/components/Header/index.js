import React from 'react';
import {Fragment} from 'react';
import {useState} from 'react';
import {withRouter} from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';


const Header = props => {

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => setOpen(true);
	const handleDrawerClose = () => setOpen(false);

	const irPara = url => {
		handleDrawerClose();
		props.history.push( url );
	}

	return (
		<Fragment>

			<AppBar position='static' color='primary'>
				<Toolbar>
					<IconButton 
						className='app-menu' 
						color='inherit' 
						aria-label='Menu'
						onClick={handleDrawerOpen}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						Exemplo
					</Typography>
				</Toolbar>
			</AppBar>

			<Drawer
				variant='persistent'
				anchor='left'
				open={open}
			>
				<IconButton onClick={handleDrawerClose}><ChevronLeftIcon/></IconButton>

				<Divider />

				<ListItem 
					button
					onClick={() => alert('Item1')}
				>
              		<ListItemIcon><InboxIcon /></ListItemIcon>
              		<ListItemText primary='Item 1' />
				</ListItem>
				
				<ListItem 
					button
					onClick={() => irPara('/sobre')}
				>
					<ListItemIcon><InboxIcon /></ListItemIcon>
					<ListItemText primary='Sobre' />
		  		</ListItem>				

			</Drawer>

		</Fragment>			
	);
};

export default withRouter(Header);
