import { Mongo } from 'meteor/mongo';

export const Workshop = new Mongo.Collection('workshop');


Meteor.methods({

	/**
	 * Create new Workshop
	 *
	 * @params {object} data - Workshop data
	 */
	'workshop.create'(data) {
		if(!this.userId)
			throw new Meteor.Error('not-authorized');


		var treatedTags = data.tags.map(tag => {
			if(typeof tag == 'object');
				return tag.label;
			return tag;
		});

		Workshop.insert({
			title: data.title,
			description: data.description,
			date: data.date,
			hour: data.hour,
			vacancies: data.vacancies,
			tags: treatedTags,
			cover: data.cover,
			comments: [],
			files: []
		})
	},



	/**
	 * Update a Workshop
	 * 
	 * @param {object} query - Query to search the record
	 * @param {object} data - Data to be updated
	 */
	'workshop.edit'(query, data) {
		if(!query)
			throw new Error('`query` is required to define which record will be updated!');

		if(!data)
			throw new Error('`data` param is required to update the record!');
	},



	'workshop.delete'(query) {
		if(!query)
			throw new Error('`query` is required to define which record will be deleted!');


		Workshop.remove(query);
	},

	'workshop.subscribe'(workshop) {
		return Workshop.update({_id: workshop._id}, {$addToSet: { students: this.userId }});
	}
});

Meteor.publish('workshops', function () {
	return Workshop.find();
});