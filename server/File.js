import { Mongo } from 'meteor/mongo';

// var fileStore = new FS.Store.GridFS("file");

var fileStore = new FileCollection('file', {
	resumable: true, 

});


Meteor.methods({

	/**
	 * Create new File
	 *
	 * @params {object} data - File data
	 */
	'file.create'(data) {
		if(!this.userId)
			throw new Meteor.Error('not-authorized');
		
		return fileStore.insert(data);
	},


	'file.delete'(query) {
		if(!query)
			throw new Error('`query` is required to define which record will be deleted!');


		File.remove(query);
	}
});

Meteor.publish('files', function () {
	return File.find();
});