import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Workshop } from '/imports/api/workshop/Workshop';
import WorkshopItem from './WorkshopItem';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// Task component - represents a single todo item
class Workshops extends Component {

  /**
   * @constructor
   */
  constructor(props) {
    super(props)
  }


    /**
   * Get child context
   * @return {[type]} [description]
   */
  getChildContext () {
    return {
      muiTheme: getMuiTheme(lightBaseTheme)
    }
  }


  /**
   * Render each item from workshop's response
   * @param  {[type]} workshops [description]
   * @return {[type]}           [description]
   */
  renderWorkshops() {
    if(this.props.workshops.length <= 0)
      return (<h1 style={{textAlign: 'center'}}>Não existe nenhum workshop cadastrado.</h1>);

    return this.props.workshops.map((workshop) => (
      <WorkshopItem key={workshop._id} workshop={workshop} />
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
      right: '5%',
      zIndex: 10
    };

    return (
      <section className="workshop-list">
          <FloatingActionButton style={fabStyle} href="/workshop/create">
            <AddIcon />
          </FloatingActionButton>
        <div>
          { this.renderWorkshops() }
        </div>
      </section>
    );
  }
}


Workshops.propTypes = {
  workshops: PropTypes.array.isRequired
};

Workshops.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};


export default createContainer(() => {
  Meteor.subscribe('workshops');

  return {
    workshops: Workshop.find().fetch()
  }
}, Workshops);