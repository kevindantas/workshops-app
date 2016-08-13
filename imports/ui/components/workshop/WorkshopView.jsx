import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Workshop } from '/imports/api/workshop/Workshop';


// Icons
import EventIcon from 'material-ui/svg-icons/action/event';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

import getMuiTheme from 'material-ui/styles/getMuiTheme';


/**
 * Component to render a single Workshop
 */
class WorkshopView extends Component {

	getChildContext() {
		return {
			muiTheme: getMuiTheme({})
		};
	}


	render() {
		return (
			<div>
				<h1> { this.props.workshop.title } </h1>
			</div>
		);
	}

}


WorkshopView.propTypes = {
	workshop: PropTypes.object.isRequired
}

WorkshopView.childContextTypes = {
	muiTheme: PropTypes.object.isRequired
}


export default createContainer(() => {
	console.log(this.props);
	Meteor.subscribe('workshops');
	return {
		workshop: this.props.workshop
	}
})