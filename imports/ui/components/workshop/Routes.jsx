import React from 'react';
import { render } from 'react-dom';
// 
import { mount } from 'react-mounter';

import { MainLayout } from '../../layouts/MainLayout';

import { Workshop } from '/imports/api/workshop/Workshop';
import Workshops from '../../components/workshop/Workshops';
import WorkshopCreate from '../../components/workshop/WorkshopCreate';
import WorkshopView from '../../components/workshop/WorkshopView';

FlowRouter.route('/workshop', {
	action() {
		mount(MainLayout, {
			content: (<Workshops pageTitle={i18n('menu.workshops')} />)
		})
	}
});


FlowRouter.route('/workshop/create', {
	action() {
		mount(MainLayout, {
			content: (<WorkshopCreate pageTitle={i18n('strings.create') + i18n('menu.workshops')} />),
		})
	}
})


FlowRouter.route('/workshop/:id', {
	action(params) {
		Meteor.subscribe('workshops');
		var workshop = Workshop.find({_id: params.id}).fetch().pop();
		mount(MainLayout, {
			content: (<WorkshopView pageTitle={workshop.title} workshop={workshop} />),
		})
	}
})