import React, { Component, PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import GithubIcon from '../icons/GithubIcon';

/**
 * Button with the color and icon from Google
 *
 * @extends {Component}
 */
export default class GithubButton extends Component {

	/**
	 * @constructs 
	 * @param  {object} props Component properties
	 * 
	 */
	constructor (props) {
		super(props);

		this.buttonStyles = {
			margin: '8px 0',
			background: 'transparent'
		}
	}


	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		return (
			<RaisedButton {...this.props} icon={<GithubIcon />} style={this.buttonStyles} />
		);
	}
}

/**
 * Set the comopnent's properties
 * @type {Object}
 */
GithubButton.propTypes = {
	label: PropTypes.string.isRequired
};