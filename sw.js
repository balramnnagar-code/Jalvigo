self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : { title: 'Jalvigo Alert', body: 'New update from Jalvigo!' };
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/3105/3105807.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/3105/3105807.png'
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
});
