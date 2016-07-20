import React, { Component, PropTypes } from 'react';


import Workshop from './Workshop';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// Task component - represents a single todo item
export default class Workshops extends Component {


  /**
   * Get child context
   * @return {[type]} [description]
   */
  getChildContext () {
    return {
      muiTheme: getMuiTheme(lightBaseTheme)
    }
  }


  getWorkshops() {
    return [{
      "_id": "daywgo8672t3o4ruhweali7aq6y234",
      "title": "String",
      "description": "String",
      "tags": "Array<String>",
      "date": "Datetime",
      "duration": "Time",
      "vacancies": "Int",
      "students": "Array<ObjectID>",
      "teachers": "Array<ObjectID>",
      "files": [{
        "name": "String=",
        "path": "String",
        "avaliable": "Bool" // Se o arquivo pode ser baixado pelos alunos ou não
      }],

      "comments": [{
        "user": "ObjectID",
        "message": "String"
      }]
    }];
  }


  renderWorkshops() {
    return this.getWorkshops().map((workshop) => (
      <Workshop key={workshop._id} workshop={workshop} />
    ));
  }


  /**
   * Render the component
   * 
   * @return {dom} Rendered component
   */
  render() {

    const fabStyle = {
      position: 'fixed',
      bottom: '5%',
      right: '5%'
    };

    return (
      <div>
          <FloatingActionButton style={fabStyle} href="/workshop/create">
            <AddIcon />
          </FloatingActionButton>

        {this.renderWorkshops()}
      </div>
    );
  }
}

Workshops.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};