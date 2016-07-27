self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});


/**
 * @event push
 * 
 * @param  {object} event - Trigered event
 */
self.addEventListener('push', function (event) {
	event.waitUntil(
		self.registration.showNotification('Novo aviso', {
			body: 'Desenvolvedor Multiplataforma',
			icon: 'public/images/logo.png'
		})
	);
})


/**
 * @event notificationclick
 * 
 * @param  {object} event - Trigered event
 */
self.addEventListener('notificationclick', function (event) {
	event.notification.close();

	event.waitUntil(
	  	clients.matchAll({  
	  		type: "window"  
	  	}).then(function(clientList) {

			// This looks to see if the current is already open and  focuses if it is  
	  		for (var i = 0; i < clientList.length; i++) {  
	  			var client = clientList[i];  
	  			if (client.url == '/notification' && 'focus' in client)  
	  				return client.focus();  
	  		}

	  		// Open a new window if can't focus 
	  		if (clients.openWindow) {
	  			return clients.openWindow('/notification');
	  		}
	  	})
	);
});