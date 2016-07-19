import React, { Component, PropTypes } from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';

export default class AppDrawer extends Component {

	/**
	 * @constructor
	 */
	constructor(props) {
		super(props);

		this.state = {open: false};
	}


	/**
	 * Get child context
	 * @return {[type]} [description]
	 */
	getChildContext () {
		return {
			muiTheme: getMuiTheme({
				palette: {
					primary1Color: lightBlue500,
					textColor: blueGrey600,
					alternateTextColor: white
				}
			})
		}
	}


	/**
	 * Toggle the drawer state
	 */
	handleToggle () {
		this.setState({open: !this.state.open})
	};


	/**
	 * Close Drawer
	 */
	handleClose () {
		this.setState({open: false});
	}


	/**
	 * Render Component
	 * @return {object} Rendered Component
	 */
	render() {
		return (
			<div>
				<Drawer
		          docked={false}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}
		        >
		        	<div className="drawer-logo"> 
		        		<img src="images/logo.svg" alt="Desenvolvedor Multiplataform" /> 
	        		</div>
		        	<MenuItem onTouchTap={this.handleClose.bind(this)}>Avisos</MenuItem>
		        	<MenuItem onTouchTap={this.handleClose.bind(this)}>Workshops</MenuItem>
		        	<MenuItem onTouchTap={this.handleClose.bind(this)}>Meus Workshops</MenuItem>
		        </Drawer>

		        <IconButton 
		    		style={{ color: 'red' }}
		    		onClick={this.handleToggle.bind(this)}> 
		    		<MenuIcon /> 
	    		</IconButton>
	        </div>
		);
	}
}


AppDrawer.childContextTypes = {
	muiTheme: PropTypes.object.isRequired
};