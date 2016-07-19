import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
// 
import { mount } from 'react-mounter';

import { LoginLayout } from '../imports/ui/layouts/LoginLayout';
import Login from '../imports/ui/components/user/Login';


import WorkshopRoutes from '../imports/ui/components/workshop/Routes'


FlowRouter.route('/', {
	action() {
		mount(LoginLayout, {
			content: (<Login />)
		})
	}
})