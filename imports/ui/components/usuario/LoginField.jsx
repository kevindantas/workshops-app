import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';


export default class LoginField extends Component {

	constructor (props) {
		super(props);

		this.labelStyle={
			color: '#F9F9F9'
		};

		this.hintStyle={
			color: '#DFDFDF'
		}
	}

	render () {
		return (
			<TextField type="text" 
				floatingLabelText="Login"  
				hintText="Digite seu CPF ou email" 
				floatingLabelFixed={true}  
				fullWidth={true} 
				floatingLabelStyle={this.labelStyle}
				hintStyle={this.hintStyle} />
		);
	}
}