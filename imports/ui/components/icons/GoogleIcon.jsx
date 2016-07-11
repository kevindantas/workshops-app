import React, { Component } from 'react';

import SvgIcon from 'material-ui/SvgIcon';

export default class GoogleIcon extends Component {

	render () {
		return (
			<SvgIcon>
				<circle fill="#D95032" cx="12.9" cy="12.9" r="12.9"/>
				<g>
					<path fill="#FFFFFF" d="M10,19.8c-3.8,0-7-3.1-7-6.8c0-3.8,3.1-6.8,7-6.8c1.7,0,3.3,0.6,4.6,1.7l-1.8,2c-0.8-0.7-1.8-1-2.8-1 c-2.4,0-4.3,1.9-4.3,4.2c0,2.3,1.9,4.2,4.3,4.2c2,0,3.3-1,3.7-2.7H10v-2.7h6.5v1.3C16.5,17.1,13.9,19.8,10,19.8z"/>
					<polygon fill="#FFFFFF" points="23.8,11.8 21.8,11.8 21.8,9.8 20.2,9.8 20.2,11.8 18.2,11.8 18.2,13.4 20.2,13.4 20.2,15.4 21.8,15.4 21.8,13.4 23.8,13.4"/>
				</g>
			</SvgIcon>
		);
	}
}