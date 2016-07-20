import React, { Component, PropTypes } from 'react';


// Icons
import EventIcon from 'material-ui/svg-icons/action/event';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

import TextField from 'material-ui/TextField';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';
 
export default class WorkshopCreate extends Component {


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
   * Render the component
   * 
   * @return {dom} Rendered component
   */
  render() {

    return (
      <form className="workshop-create">
        <fieldset>
          <TextField 
              type="text" 
              required={true}
              floatingLabelText={i18n('workshop.title')} 
              inputStyle={this.inputStyle}
              floatingLabelStyle={this.labelStyle}
              fullWidth={true} />
        </fieldset>
      </form>
    );
  }
}
 
WorkshopCreate.propTypes = {
};


WorkshopCreate.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};