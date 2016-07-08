import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import LoginField from './LoginField';


export default class Login extends Component {
	render () {
		return (
			<form className="login-form">
				<fieldset>
					<LoginField  />
					<TextField type="password" floatingLabelText="Senha" hintText="Digite a senha" />
					<RaisedButton label="Entrar" primary={true} className="rounded" />

					<a href="#">  Caso seja seu primeiro acesso clique aqui ou use uma das redes sociais abaixo </a>
				</fieldset>

				<fieldset>
					<RaisedButton label="Github" icon={<GithubIcon />} className="rounded" />
					<RaisedButton label="Facebook" icon={<FacebookIcon />} className="rounded" />
					<RaisedButton label="Google" icon={<GoogleIcon />} className="rounded" />
				</fieldset>
			</form>
		)
	}
}