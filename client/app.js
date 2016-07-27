if(navigator.serviceWorker) {
	navigator.serviceWorker.register('/sw.js').then((registration) => {
		registration.pushManager.subscribe({
			userVisibleOnly: true
		}).then((subscription) => {
			console.log(subscription)
		}).catch((err) => {
			console.error(err);
		})
	}).catch((err) => {
		console.error('Service Worker subscription failed.');
	})
}