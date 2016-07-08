import React, { Component, PropTypes } from 'react';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

// Icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';
import HelpIcon from 'material-ui/svg-icons/action/help';

/**
 * AppBar used by the app
 *
 * @property {string} title - Title used in the AppBar according the page
 */
export default class AppBarComponent extends Component {

	constructor (props) {
		super(props);

	    this.state = {open: false};
	}



	handleToggle () {
		this.setState({open: !this.state.open})
	};

	handleClose () {
		this.setState({open: false});
	}


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
				<AppBar
			    title={this.props.title}
			    iconElementLeft={
			    	<IconButton 
			    		style={{ color: 'red' }}
			    		onClick={this.handleToggle.bind(this)}> 
			    		<MenuIcon /> 
		    		</IconButton>
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