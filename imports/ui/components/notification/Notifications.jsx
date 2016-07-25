import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

/**
 * List all notifications from the app
 */
export default class Notifications extends Component {

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
    if(notifications.length <= 0)
      return <h1 style={{textAlign: 'center'}}>Não existe nenhuma notificação cadastrado.</h1>

    return notifications.map((notification, _id) => (
      <div key={_id}>
        <h3> {notification.title} </h3>
        <p> {notification.description} </p>
      </div>
    ));
  }


  /**
   * [componentDidMount description]
   * @return {[type]} [description]
   */
  componentDidMount() {
    this.state = {};
      this.request =  Meteor.call('notification.list', (err, response) => {
        if(err) {
          console.error(err);
          return false;
        }

        var renderer = this.renderNotifications(response)

        this.setState({
          notifications: renderer
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
      <section className="notification-list">
          <FloatingActionButton style={fabStyle} href="/notification/create">
            <AddIcon />
          </FloatingActionButton>
        <div>
          { this.state.notifications }
        </div>
      </section>
    );
  }
}

Notifications.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};