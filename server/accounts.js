// Remove configuration entry in case service is altready configured
// 
// 
// 
// 

/**
 * Configure Github Accounts service
 */
ServiceConfiguration.configurations.upsert({
	service: 'github'
}, {
	$set: {
		clientId: Meteor.settings.private.github.client_id,
		secret: Meteor.settings.private.github.client_secret,
		loginStyle: "popup"
	}
})



/**
 * Configure Google Accounts service
 */
ServiceConfiguration.configurations.upsert({
  service: "google"
}, {
	$set: {
	  clientId: Meteor.settings.private.google.web.client_id,
	  secret: Meteor.settings.private.google.web.client_secret,
	  loginStyle: "popup"
	}
});


/**
 * Configure Google Accounts service
 */
ServiceConfiguration.configurations.upsert({
  service: "facebook"
}, {
	$set: {
	  appId: Meteor.settings.private.facebook.web.app_id,
	  secret: Meteor.settings.private.facebook.web.secret,
	  loginStyle: "popup"
	}
});


Accounts.onCreateUser((options, user) => {


	if(user.services.google) {
		let googleUser = user.services.google;
		user.email = googleUser.email;

		if (googleUser.picture) user.photo = googleUser.picture;
	}

	user.workshops = [];
	user.groups = [];


	return user;

});
