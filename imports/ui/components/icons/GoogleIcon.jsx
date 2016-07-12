import React, { Component } from 'react';

import SvgIcon from 'material-ui/SvgIcon';

export default class GoogleIcon extends Component {

	render () {
		return (
			<SvgIcon>
				<circle fill="#D95032" cx="12" cy="12" r="12"/>
				<g>
					<path fill="#FFFFFF" d="M9.3,18.4c-3.6,0-6.5-2.8-6.5-6.4c0-3.5,2.9-6.4,6.5-6.4c1.6,0,3.1,0.6,4.2,1.6l-1.6,1.9 c-0.7-0.6-1.6-1-2.6-1c-2.2,0-4,1.7-4,3.9c0,2.1,1.8,3.9,4,3.9c1.8,0,3.1-0.9,3.5-2.5H9.3V11h6.1v1.2 C15.4,15.9,12.9,18.4,9.3,18.4z"/>
					<polygon fill="#FFFFFF" points="22.1,11 20.2,11 20.2,9.1 18.7,9.1 18.7,11 16.9,11 16.9,12.5 18.7,12.5 18.7,14.3 20.2,14.3 20.2,12.5 22.1,12.5"/>
				</g>
			</SvgIcon>
		);
	}
}