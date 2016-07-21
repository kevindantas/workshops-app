import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

// Themes
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class NotFound extends Component {


	/**
	 * @constructor
	 * @param  {object} props
	 */
	constructor (props) {
		super(props);

		this.h1Style = {
			textAlign: 'center'
		}

		this.h2Style = {
			textAlign: 'center'
		}
	}


	getChildContext () {
		return {
			muiTheme: getMuiTheme(lightBaseTheme)
		}
	}


	/**
	 * Render the component
	 * @return {dom} Rendered component
	 */
	render () {
		return (
			<div className="not-found">
				<h1 style={this.h1Style}>404</h1>
				<h2 style={this.h2Style}>{i18n('error.notFound')}</h2>
			</div>
		)
	}
}

NotFound.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};
