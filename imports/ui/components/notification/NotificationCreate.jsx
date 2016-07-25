import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';
 
export default class NotificationCreate extends Component {

  /**
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      error: {}
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
   * Validate the notifications form according the HTML5 Validations
   * 
   * @return {bool} isValid - if the all form isValid
   */
  validateForm() {

    var errors = {
      error: {
        title: null,
        description: null
      }
    };

    var isValid = true;


    for (var ind in this.refs) {
      let ref = this.refs[ind];

      // Check if is a TextField so we can grab the input node
      if(ref instanceof TextField){
        var input = ref.input.validity ? ref.input : ref.input.getInputNode();

        if(!input.validity.valid){
          errors.error[ind] = i18n('error.required');
          isValid = false;
        }
      }
    }

    this.setState(errors);

    return isValid;
  }


  /**
   * Create new notification
   *
   * @param {object} e - Triggered Event
   */
  createNotification(e) {
    e.preventDefault();

    if(!this.validateForm()) return;

    var notification = {
      title: this.refs.title.getValue(),
      description: this.refs.description.getValue()
    };


    Meteor.call('notification.create', notification, (err, response, a) => {
      if(err){
        console.error(err);
        return false;
      }

      FlowRouter.go('/notification', {
        snackbar: i18n('feedbaack.create')
      });
    })
    
  }



  /**
   * Render the component
   * 
   * @return {dom} Rendered component
   */
  render() {
    const defaultDuration = new Date();
    defaultDuration.setHours(9);
    defaultDuration.setMinutes(0);

    return (
      <form className="notification-create" onSubmit={this.createNotification.bind(this)} noValidate>
        <fieldset>
          <TextField 
            ref="title"
            type="text" 
            required={true}
            errorText={this.state.error.title}
            floatingLabelText={i18n('notification.title')} 
            inputStyle={this.inputStyle}
            floatingLabelStyle={this.labelStyle}
            fullWidth={true} />

          <TextField 
            ref="description"
            type="text" 
            required={true}
            multiLine={true}
            rows={4}
            errorText={this.state.error.description}
            floatingLabelText={i18n('notification.description')} 
            inputStyle={this.inputStyle}
            floatingLabelStyle={this.labelStyle}
            fullWidth={true} />

          <RaisedButton 
            primary={true} 
            type="submit"
            label={i18n('label.create')} />
        </fieldset>
      </form>
    );
  }
}
 
NotificationCreate.propTypes = {
};


NotificationCreate.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};