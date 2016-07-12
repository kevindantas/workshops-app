import React, { Component, PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import GoogleIcon from '../icons/GoogleIcon';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

/**
 * Button with the color and icon from Google
 *
 * @extends {Component}
 */
export default class GoogleButton extends Component {

	/**
	 * @constructs 
	 * @param  {object} props Component properties
	 * 
	 */
	constructor (props) {
		super(props);

		this.buttonStyles = {
			margin: '8px 0'
		}
	}



	/**
	 * Get child context
	 * @return {[type]} [description]
	 */
	getChildContext () {
		return {
			muiTheme: getMuiTheme({
				palette: {
					primary1Color: '#D95032'
				}
			})
		}
	}


	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		return (
			<RaisedButton label={this.props.label} icon={<GoogleIcon />} className="rounded" primary={true} style={this.buttonStyles} />
		);
	}
}

/**
 * Set the comopnent's properties
 * @type {Object}
 */
GoogleButton.propTypes = {
	label: PropTypes.string.isRequired
};

/**
 * Define child context
 * @type {Object}
 */
GoogleButton.childContextTypes = {
	muiTheme: PropTypes.object.isRequired
};