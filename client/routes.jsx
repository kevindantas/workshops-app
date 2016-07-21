import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
// 
import { mount } from 'react-mounter';

import { LoginLayout } from '../imports/ui/layouts/LoginLayout';
import { MainLayout } from '../imports/ui/layouts/MainLayout';

import Login from '../imports/ui/components/user/Login';
import NotFound from '../imports/ui/components/NotFound';
import Help from './pages/Help';


import WorkshopRoutes from '../imports/ui/components/workshop/Routes'


FlowRouter.route('/', {
	action() {
		mount(LoginLayout, {
			content: (<Login />)
		})
	}
});

FlowRouter.route('/help', {
	action() {
		mount(MainLayout, {
			content: (<Help pageTitle={i18n('menu.help')} />)
		})
	}
})


FlowRouter.notFound = {
	action() {
		mount(MainLayout, {
			content: (<NotFound pageTitle={i18n('strings.notFound')} />)
		})
	}
};