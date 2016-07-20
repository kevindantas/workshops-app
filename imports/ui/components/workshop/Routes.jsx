import React from 'react';
import { render } from 'react-dom';
// 
import { mount } from 'react-mounter';

import { MainLayout } from '../../layouts/MainLayout';
import Workshops from '../../components/workshop/Workshops';
import WorkshopCreate from '../../components/workshop/WorkshopCreate';

FlowRouter.route('/workshop', {
	action() {
		mount(MainLayout, {
			content: (<Workshops />)
		})
	}
});


FlowRouter.route('/workshop/create', {
	action() {
		mount(MainLayout, {
			content: (<WorkshopCreate />)
		})
	}
})