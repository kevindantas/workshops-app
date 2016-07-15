// Remove configuration entry in case service is altready configured
// 
ServiceConfiguration.configurations.update({
	serivce: 'github'
}, {
	$set: {
		appId: Meteor.settings.github.client_id,
		secret: Meteor.settings.github.client_secret
	}
})