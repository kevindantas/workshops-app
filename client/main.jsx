import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from './App.jsx';
 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


i18n.setDefaultLanguage('pt-BR');

/*Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
*/