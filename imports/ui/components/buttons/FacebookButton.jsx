import React, { Component, PropTpes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FacebookIcon from '../icons/FacebookIcon';

/**
 * Button with the color and Facebook icon's
 *
 * @extends {Component}
 */
export default class FacebookButton extends Component {

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
			<RaisedButton label={this.props.label} icon={<FacebookIcon />} className="rounded" style={this.buttonStyles} />
		);
	}
}

/**
 * Set the comopnent's properties
 * @type {Object}
 */
FacebookButton.propTypes = {
	label: PropTpes.string.isRequired
};