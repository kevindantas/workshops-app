import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import React, { Component, PropTypes } from 'react';

import {Notification} from '/imports/api/notification/Notification';

import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

/**
 * List all notifications from the app
 */
class Notifications extends Component {

  /**
   * @constructor
   */
  constructor(props) {
    super(props)
    this.state = {
      notificationsList: []
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
   * Render each item from notification's response
   * @param  {[type]} notifications [description]
   * @return {[type]}           [description]
   */
  renderNotifications(notifications) {

    if(this.props.notifications.length <= 0) {
      return (
        <ListItem className="no-records" primaryText="Não existe nenhuma notificação cadastrado." />
      );
    }


    return this.props.notifications.map((notification) => (
        <ListItem key={notification._id} primaryText={ notification.title } secondaryText={ notification.description } secondaryTextLines={1} />
    ))
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
      <section className="notification-list">
          <FloatingActionButton style={fabStyle} href="/notification/create">
            <AddIcon />
          </FloatingActionButton>
        <List>
          { this.renderNotifications() }
        </List>
      </section>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired
};


Notifications.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};



export default createContainer(() => {
  Meteor.subscribe('notifications');
  return {
    notifications: Notification.find().fetch()
  };
}, Notifications)
