import React, { Component } from 'react';

import SvgIcon from 'material-ui/SvgIcon';


/**
 * Facebook Icon
 *
 * @extends {Component}
 */
export default class FacebookIcon extends Component {


	/**
	 * Render Component
	 * @return {object} Rendered Component
	 */
	render () {
		return (
			<SvgIcon style={{verticalAlign: 'middle'}}>
				<path fill="#3A589B" d="M0,0v24h24V0H0z M15.3,12h-2.1v7.6H10V12H8.4V9.4H10V7.8c0-2.1,0.9-3.4,3.4-3.4h2.1V7h-1.3 c-1,0-1,0.4-1,1.1l0,1.3h2.4L15.3,12z"/>
				<path fill="#ECEFF1" d="M15.6,9.4L15.3,12h-2.1v7.6H10V12H8.4V9.4H10V7.8c0-2.1,0.9-3.4,3.4-3.4h2.1V7h-1.3c-1,0-1,0.4-1,1.1l0,1.3 H15.6z"/>
			</SvgIcon>
		);
	}
}