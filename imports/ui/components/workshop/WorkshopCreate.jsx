import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';


// Icons
import EventIcon from 'material-ui/svg-icons/action/event';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';
import LabelIcon from 'material-ui/svg-icons/action/label';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';

import Chips from '../Chips';
import ImagePreviewField from '../imagePreview/ImagePreviewField';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';
 
export default class WorkshopCreate extends Component {

  /**
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      error: {}
    }

    this.styles = {
      icon: {
        display: 'inline',
        verticalAlign: 'middle'
      },
      inputIcon: {
        display: 'inline-block',
        width: 'calc(100% - 32px)',
        marginLeft: 8
      }
    }

    this.titleLabel = {
      // color: '#fff'
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
   * Upload cover file
   * @return {} [description]
   */
  uploadCover() {

  }


  /**
   * Create new workshop
   *
   * @param {object} e - Triggered Event
   */
  createWorkshop(e) {
    e.preventDefault();

    console.log(this.refs.cover)
    console.log(this.refs.title)


    if(!this.validateForm()) return;

    var workshop = {
      title: this.refs.title.getValue(),
      description: this.refs.description.getValue(),
      vacancies: this.refs.vacancies.getValue(),
      date: this.refs.date.state.date,
      hour: this.refs.hour.state.time,
      tags: this.refs.tags.state.chipsData
    };

    return false;
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
        <fieldset style={{padding: 0}}>
          <div className="title-field">
            <TextField 
              ref="title"
              type="text" 
              required={true}
              errorText={this.state.error.title}
              floatingLabelText={i18n('workshop.title')} 
              inputStyle={this.inputStyle}
              floatingLabelStyle={this.labelStyle}
              underlineFocusStyle={{
                // borderColor: '#fff',
              }}
              underlineStyle={{
                bottom: 4
              }}
              fullWidth={true} />
          </div>

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

          <h4>Capa</h4>
          <ImagePreviewField
            uploadAction={this.uploadCover.bind(this)}
            fullWidth={true}
            ref="cover"
            name="cover"
            required={true} />

          <div>
            <AssignmentIcon style={this.styles.icon} />
            <TextField 
              ref="vacancies"
              min={0}
              type="number" 
              required={true}
              style={this.styles.inputIcon}
              errorText={this.state.error.vacancies}
              floatingLabelText={i18n('workshop.vacancies')} 
              inputStyle={this.inputStyle}
              floatingLabelStyle={this.labelStyle} />
          </div>


          <h4 style={{
            marginBottom: 0
          }}>Data e hora</h4>

          <div style={{
                width: '48%',
                float: 'left',
                marginRight: '4%'
              }}>


            <EventIcon style={this.styles.icon} />
            <DatePicker 
              leftIcon={<EventIcon />}
              ref="date"
              autoOk={true}
              required={true}
              errorText={this.state.error.date}
              disableYearSelection={true}
              hintText={i18n('workshop.date')} 
              style={this.styles.inputIcon}
              textFieldStyle={{
                width: '100%'
              }}
              formatDate={function(date) {
                return date.toLocaleDateString();
              }} />
          </div>


          <div style={{
                width: '48%',
                float: 'left',
              }}>
            <TimeIcon style={this.styles.icon} />
            <TimePicker 
              ref="hour"
              required={true}
              errorText={this.state.error.hour}
              hintText={i18n('workshop.hour')} 
              style={this.styles.inputIcon}
              textFieldStyle={{
                width: '100%'
              }}
              onChange={(e, hour) => {
                this.value = hour;
                return hour;
              }} />
          </div>

          <div style={{
            textAlign: 'center',
            float: 'left',
            width: '100%'
          }}>
            <h4>Tags</h4>
            <LabelIcon style={this.styles.icon} />
            <Chips hintText={i18n('label.addTag')} ref="tags" fullWidth={true}  style={this.styles.inputIcon} />
          </div>


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