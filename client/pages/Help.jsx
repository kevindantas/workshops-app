import React, { Component } from 'react';


export default class Help extends Component {
	render() {
		return (
			<section className="help">
				<h1>{ i18n('menu.help') }</h1>
			</section>
		);
	}
}