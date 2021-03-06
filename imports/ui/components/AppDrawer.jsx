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
		

		if(window.innerWidth > 720) {
			this.state = {
				isOpen: true,
				isDocked: true
			};
		} else {
			this.state = {
				isOpen: false,
				isDocked: false
			};
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
		this.setState({isOpen: !this.state.isOpen})
	};


	/**
	 * Close Drawer
	 */
	handleClose () {
		if(window.innerWidth < 720) 
			this.setState({isOpen: false});
	}


	/**
	 * Render Component
	 * @return {object} Rendered Component
	 */
	render() {
		return (
			<div>
				<Drawer
		          docked={this.state.isDocked}
		          open={this.state.isOpen}
		          onRequestChange={(isOpen) => this.setState({isOpen})}
		        >
		        	<div className="drawer-logo"> 
		        		<img src="/images/logo.svg" alt="Desenvolvedor Multiplataform" /> 
	        		</div>
		        	<MenuItem href="/notification" onTouchTap={this.handleClose.bind(this)}>{i18n('menu.notifications')}</MenuItem>
		        	<MenuItem href="/workshop" onTouchTap={this.handleClose.bind(this)}>{i18n('menu.workshops')}</MenuItem>
		        	<MenuItem href="/me/workshop" onTouchTap={this.handleClose.bind(this)}>{i18n('menu.myWorkshops')}</MenuItem>
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