import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Workshop = new Mongo.Collection('workshop');


Meteor.methods({
	'workshop.create'(data) {
		if(!this.userId)
			throw new Meteor.Error('not-authorized');

		Workshop.insert({
			title: data.title,
			description: data.description,
			date: data.date,
			hour: data.hour,
			vacancies: data.vacancies,
			comments: [],
			files: []
		})

	}
})