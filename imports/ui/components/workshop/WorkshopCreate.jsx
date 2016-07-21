import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';


// Icons
import EventIcon from 'material-ui/svg-icons/action/event';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

import Chips from '../Chips';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';
 
export default class WorkshopCreate extends Component {


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
   * Validate the workshops form according the HTML5 Validations
   * 
   * @return {bool} isValid - if the all form isValid
   */
  validateForm() {

    var errors = {
      error: {
        title: null,
        description: null,
        vacancies: null,
        date: null,
        hour: null
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

      } else if(ref.refs.input){

        var input = ref.refs.input.getInputNode();
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
   * Create new workshop
   * 
   */
  createWorkshop(e) {
    e.preventDefault();

    if(!this.validateForm()) return;

    var workshop = {
      title: this.refs.title.getValue(),
      description: this.refs.description.getValue(),
      date: this.refs.date.state.date,
      hour: this.refs.hour.state.time,
      tags: this.refs.tags.state.chipsData
    };


    Meteor.call('workshop.create', workshop, (err, response, a) => {
      if(err){
        console.error(err);
        return false;
      }

      FlowRouter.go('/workshop', {
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
      <form className="workshop-create" onSubmit={this.createWorkshop.bind(this)} noValidate>
        <fieldset>
          <TextField 
            ref="title"
            type="text" 
            required={true}
            errorText={this.state.error.title}
            floatingLabelText={i18n('workshop.title')} 
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
            floatingLabelText={i18n('workshop.description')} 
            inputStyle={this.inputStyle}
            floatingLabelStyle={this.labelStyle}
            fullWidth={true} />


          <TextField 
            ref="vacancies"
            min={0}
            type="number" 
            required={true}
            errorText={this.state.error.vacancies}
            floatingLabelText={i18n('workshop.vacancies')} 
            inputStyle={this.inputStyle}
            floatingLabelStyle={this.labelStyle} />

          <DatePicker 
            ref="date"
            autoOk={true}
            required={true}
            errorText={this.state.error.date}
            disableYearSelection={true}
            hintText={i18n('workshop.date')} 
            formatDate={function(date) {
              return date.toLocaleDateString();
            }} />

          <TimePicker 
            ref="hour"
            required={true}
            errorText={this.state.error.hour}
            hintText={i18n('workshop.hour')} 
            onChange={(e, hour) => {
              this.value = hour;
              return hour;
            }} />

          <Chips hintText={i18n('label.addTag')} ref="tags" />


          <RaisedButton 
            primary={true} 
            type="submit"
            label={i18n('label.create')} />
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