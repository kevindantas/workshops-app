import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Icons
import GithubIcon from '../icons/GithubIcon';
import GoogleIcon from '../icons/GoogleIcon';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';

import LoginField from './LoginField';
import GithubButton from '../buttons/GithubButton';
import FacebookButton from '../buttons/FacebookButton';
import GoogleButton from '../buttons/GoogleButton';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class Login extends Component {

	constructor (props) {
		super(props);

		this.labelStyle={
			color: '#F9F9F9'
		};

		this.hintStyle={
			color: '#DFDFDF'
		}

	}


	getChildContext () {
		return {
			muiTheme: getMuiTheme(lightBaseTheme)
		}
	}


	render () {
		return (
			<form className="login-form">

				<h1 className="logo">
					Desenvolvedor Multiplataforma Web &amp; Mobile
				</h1>

				<fieldset>
					<LoginField  />
					<TextField 
						type="password" 
						hintText="********" 
						floatingLabelText="Senha" 
						floatingLabelFixed={true}  
						hintStyle={this.hintStyle}
						floatingLabelStyle={this.labelStyle}
						fullWidth={true} />
					<RaisedButton label="Entrar" primary={true} className="rounded" />

					<a href="#">  Caso seja seu primeiro acesso clique aqui ou use uma das redes sociais abaixo </a>
				</fieldset>

				<fieldset>
					<GithubButton label="Login com Github" className="rounded" />
					<FacebookButton label="Login com o Facebook" className="rounded" />
					<GoogleButton label="Login com o Google" className="rounded" />
				</fieldset>
			</form>
		)
	}
}

Login.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};
