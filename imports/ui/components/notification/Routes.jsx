import React from 'react';
import { render } from 'react-dom';
// 
import { mount } from 'react-mounter';

import { MainLayout } from '../../layouts/MainLayout';
import Notifications from '../../components/notification/Notifications';
import NotificationCreate from '../../components/notification/NotificationCreate';

FlowRouter.route('/notification', {
	action() {
		mount(MainLayout, {
			content: (<Notifications pageTitle={i18n('menu.notifications')} />)
		})
	}
});


FlowRouter.route('/notification/create', {
	action() {
		mount(MainLayout, {
			content: (<NotificationCreate pageTitle={i18n('strings.create') + i18n('menu.notifications')} />),
		})
	}
})