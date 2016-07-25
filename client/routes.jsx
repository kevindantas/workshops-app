import React from 'react';
import { render } from 'react-dom';
import { mount } from 'react-mounter';

import { LoginLayout } from '../imports/ui/layouts/LoginLayout';
import { MainLayout } from '../imports/ui/layouts/MainLayout';

// General Components
import Login from '../imports/ui/components/user/Login';
import NotFound from '../imports/ui/components/NotFound';
import Help from './pages/Help';

// Import all routes from other components
import WorkshopRoutes from '../imports/ui/components/workshop/Routes';
import NotificationRoutes from '../imports/ui/components/notification/Routes';


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