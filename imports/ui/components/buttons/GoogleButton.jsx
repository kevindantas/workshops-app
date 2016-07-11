import React, { Component, PropTpes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import GoogleIcon from '../icons/GoogleIcon';

/**
 * Button with the color and icon from Google
 *
 * @extends {Component}
 */
export default class GoogleokButton extends Component {

	/**
	 * @constructs 
	 * @param  {object} props Component properties
	 * 
	 */
	constructor (props) {
		super(props);

		this.buttonStyles = {
			color: '#fff',
			background: '#3A589B'
		}
	}


	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		return (
			<RaisedButton label={this.props.label} icon={<GoogleIcon />} className="rounded" style={this.buttonStyles} />
		);
	}
}

/**
 * Set the comopnent's properties
 * @type {Object}
 */
GoogleokButton.propTypes = {
	label: PropTpes.string.isRequired
};