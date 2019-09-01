import React from 'react';

import Home from '../components/Home'
import Sobre from '../components/Sobre';

const routes = [
	 {
	     path: '/',
	     exact: true,
	     component: () => ( <Home/> )
	 },

	 {
	     path: '/sobre',
	     exact: true,
	     component: () => ( <Sobre/> )
	 },
];

export default routes;
