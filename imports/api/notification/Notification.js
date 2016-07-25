import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Notification = new Mongo.Collection('notification');


Meteor.methods({

	/**
	 * Create new Notification
	 *
	 * @params {object} data - Notification data
	 */
	'notification.create'(data) {
		if(!this.userId)
			throw new Meteor.Error('not-authorized');

		Notification.insert({
			title: data.title,
			description: data.description
		})
	},

	/**
	 * List all notifications 
	 *
	 * @param {object=} query - MongoDB queries
	 */
	'notification.list'(query) {
		return Notification.find(query || {}).fetch();
	},


	/**
	 * Update a Notification
	 * 
	 * @param {object} query - Query to search the record
	 * @param {object} data - Data to be updated
	 */
	'notification.edit'(query, data) {
		if(!query)
			throw new Error('`query` is required to define which record will be updated!');

		if(!data)
			throw new Error('`data` param is required to update the record!');
	},



	'notification.delete'(query) {
		if(!query)
			throw new Error('`query` is required to define which record will be deleted!');

		Notification.remove(query);
	}
})