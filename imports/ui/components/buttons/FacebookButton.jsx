import React, { Component, PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FacebookIcon from '../icons/FacebookIcon';

import getMuiTheme from 'material-ui/styles/getMuiTheme';


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
			margin: '8px 0',
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
					primary1Color: '#3A589B'
				},
				primary1Color: '#3A589B'
			})
		}
	}


	/**
	 * Render Component
	 * @return {opbject} Rendered Component
	 */
	render () {
		return (
			<RaisedButton label={this.props.label} icon={<FacebookIcon />} className="button" primary={true} style={this.buttonStyles} />
		);
	}
}

/**
 * Set the comopnent's properties
 * @type {Object}
 */
FacebookButton.propTypes = {
	label: PropTypes.string.isRequired
};


/**
 * Define child context
 * @type {Object}
 */
FacebookButton.childContextTypes = {
	muiTheme: PropTypes.object.isRequired
};