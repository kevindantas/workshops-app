import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';


export default class LoginField extends Component {
	render () {
		return (
			<TextField type="text" floatingLabelText="Login"  hintText="Digite seu CPF ou email" />
		);
	}
}