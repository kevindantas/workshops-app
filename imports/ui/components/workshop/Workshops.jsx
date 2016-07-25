import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';


import Workshop from './Workshop';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// Task component - represents a single todo item
export default class Workshops extends Component {

  /**
   * @constructor
   */
  constructor(props) {
    super(props)
    this.state = {
      workshopsList: []
    };
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
  renderWorkshops(workshops) {
    if(workshops.length <= 0)
      return <h1 style={{textAlign: 'center'}}>Não existe nenhum workshop cadastrado.</h1>

    return workshops.map((workshop, _id) => (
      <Workshop key={_id} workshop={workshop} />
    ));
  }


  /**
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount() {
    this.state = {};
      this.request =  Meteor.call('workshop.list', (err, response) => {
        if(err) {
          console.error(err);
          return false;
        }

        var renderer = this.renderWorkshops(response)

        this.setState({
          workshops: renderer
        });

      })
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
          { this.state.workshops }
        </div>
      </section>
    );
  }
}

Workshops.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};