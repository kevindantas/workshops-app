import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class MainNav extends Component {

  handleToggle () {
    console.log(this.props)
  	this.props.isOpen = true;
  };

  handleClose () {
  	console.log(this)
  	this.props.isOpen = false; 
  };

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer
          docked={false}
          open={this.props.isOpen}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}