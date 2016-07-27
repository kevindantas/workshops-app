import { Meteor } from 'meteor/meteor';

/**
 * Workshop imports
 */
import '../imports/api/workshop/Workshop.js';


/**
 * User imports
 */
import '../imports/api/user/User.js';


/**
 * Group imports
 */
import '../imports/api/group/Group.js';


/**
 * Notification imports
 */


Meteor.publish('notification', function() {
	return Notification
});