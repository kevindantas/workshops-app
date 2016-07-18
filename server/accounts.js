// Remove configuration entry in case service is altready configured
// 
// 
// 
// 

/**
 * Configure Github Accounts service
 */
ServiceConfiguration.configurations.upsert({
	serivce: 'github'
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