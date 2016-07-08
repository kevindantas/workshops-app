import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Login from '../imports/ui/components/usuario/Login';


Meteor.startup(() => {
	render(
		<Router history={ browserHistory }>
			<Route path="/" component={ Login } />
		</Router>,
		document.getElementById('render-target')
	);
});