// Remove configuration entry in case service is altready configured
// 
// 
// 
// 
console.log(ServiceConfiguration.configurations.remove);

/*
ServiceConfiguration.configurations.remove({
	service: 'github'
})

ServiceConfiguration.configurations.insert({
	serivce: 'github',
	clientId: Meteor.settings.private.github.client_id,
	secret: Meteor.settings.private.github.client_secret
})





ServiceConfiguration.configurations.remove({
  service: "google"
});

ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: Meteor.settings.private.google.web.client_id,
  secret: Meteor.settings.private.google.web.client_secret,
  loginStyle: "popup"
});*/