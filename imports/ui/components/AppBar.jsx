import React, { Component, PropTypes } from 'react';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AppDrawer from './AppDrawer';

// Icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';
import HelpIcon from 'material-ui/svg-icons/action/help';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';

/**
 * AppBar used by the app
 *
 * @property {string} title - Title used in the AppBar according the page
 */
export default class AppBarComponent extends Component {

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
	 * Render Component
	 * @return {object} Rendered Component
	 */
	render() {
		return (
			<div>
				<AppBar
			    title={this.props.title}
			    iconElementLeft={
			    	<AppDrawer />
			    }
			    iconElementRight={
			      <IconMenu
			      	anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	        		targetOrigin={{horizontal: 'right', vertical: 'top'}}
			        iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
			      >
			        <MenuItem primaryText="Configurações" leftIcon={<SettingsIcon />} />
			        <MenuItem primaryText="Ajuda"  leftIcon={<HelpIcon />}  />
			        <MenuItem primaryText="Logout"  leftIcon={<ExitIcon />}  />
			      </IconMenu>
			    }
			  />
		  </div>
		);
	}
}


AppBarComponent.propTypes = {
	title: PropTypes.string.isRequired
}

AppBarComponent.childContextTypes = {
	muiTheme: PropTypes.object.isRequired
};