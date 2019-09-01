import React from 'react';
import {Fragment} from 'react';
import {createMuiTheme} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import 'typeface-roboto';

import './App.css';
import routes from '../../routes';
import Header from '../Header';

const theme = createMuiTheme({
	 palette: {
	     primary: green,
	     secondary: purple,
	 },
	 status: {
	     danger: 'orange',
	 },
	 typography: {
	     useNextVariants: true,
	 }
});

const App = () => (

		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Fragment>
					<Header/>
					<Switch>
						{
							routes.map((route,index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									component={route.component}
								/>
							))
						}
					</Switch>
				</Fragment>
			</BrowserRouter>
		</MuiThemeProvider>
);

export default App;
	
