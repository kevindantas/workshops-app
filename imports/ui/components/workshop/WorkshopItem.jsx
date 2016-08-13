import React, { Component, PropTypes } from 'react';


// Icons
import EventIcon from 'material-ui/svg-icons/action/event';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import AssignmentIcon from 'material-ui/svg-icons/action/assignment';

import {Card, CardMedia, CardActions, CardTitle, CardText} from 'material-ui/Card';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500, blueGrey600, white } from 'material-ui/styles/colors';
 

export default class WorkshopItem extends Component {

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
      <Card className="workshop">
        <a href={`/workshop/${this.props.workshop._id}`}>
    		  <CardMedia children={
            <img src="/images/workshop.jpg" alt="Desenvolvedor Multiplataform" /> 
          } />

          <CardTitle title={this.props.workshop.title} />

          <CardText> { this.props.workshop.description } </CardText>

          <CardActions className="meta-infos">
            <div>
              <EventIcon />
              { this.props.workshop.date.toLocaleDateString() }
            </div>

            <div>
              <TimeIcon />
              { this.props.workshop.hour.toLocaleTimeString() }
            </div>

            <div>
              <AssignmentIcon />
              { this.props.workshop.vacancies }
            </div>

          </CardActions>
        </a>
      </Card>
    );
  }
}
 
WorkshopItem.propTypes = {
  workshop: PropTypes.object.isRequired,
};


WorkshopItem.childContextTypes = { 
  muiTheme: PropTypes.object.isRequired
};