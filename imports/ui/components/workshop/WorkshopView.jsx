import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Workshop } from '/imports/api/workshop/Workshop';


// Icons
import EventIcon from 'material-ui/svg-icons/action/event';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';


/**
 * Component to render a single Workshop
 */
export default class WorkshopView extends Component {

	/**
	 * @constructor
	 */
	constructor(props) {
		super(props);

		this.state = {
			snackbarOpen: false
		};

	}

	getChildContext() {
		return {
			muiTheme: getMuiTheme({})
		};
	}


	/**
	 * Subscribe the user to the workshop
	 * 
	 */
	subscribeWorkshop() {

		Meteor.call('workshop.subscribe', this.props.workshop, (err, succeded) => {
			if(succeded) {
				this.setState({
					snackbarOpen: true
				})
			}
		});
	}


	/**
	 * Handle the close event of the snackbar
	 */
	handleSnackbarClose() {
		this.setState({
			snackbarOpen: false
		});
	}



	/**
	 * Render the component 
	 * @return {object} Rendered Component
	 */
	render() {
		return (
			<div>
				<h1> { this.props.workshop.title } </h1>

				<p> {this.props.workshop.description} </p>

				<div>
	              <EventIcon />
	              { this.props.workshop.date.toLocaleDateString() }
	            </div>

	            <div>
	              <TimeIcon />
	              { this.props.workshop.hour.toLocaleTimeString() }
	            </div>

	            <div>
	              <AssignmentIcon />
	              { this.props.workshop.vacancies }
	            </div>

	            <RaisedButton label="Increver-se" className="round" onClick={this.subscribeWorkshop.bind(this)} />

	            <Snackbar
		          open={this.state.snackbarOpen}
		          message="Você está inscrito no workshop!"
		          autoHideDuration={5000}
		          action="Ok"
                  onActionTouchTap={this.handleSnackbarClose.bind(this)}
		          onRequestClose={this.handleSnackbarClose.bind(this)} />
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