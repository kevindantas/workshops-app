import React, { Component, PropTypes } from 'react';

import MenuItem from 'material-ui/MenuItem';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

/**
 * Logout button  Component
 */
export default class LogoutButton extends Component {


	/**
	 * Handles user logout
	 * @return {[type]} [description]
	 */
	logout() {
		console.log('logout');
	}


	/**
	 * Render Component
	 */
	render() {
		<MenuItem primaryText="Logout" leftIcon={<ExitIcon /> onClick={this.logout()} } />
	}
}