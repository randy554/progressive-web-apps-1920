const cache_name = 'site-static';
const assets = [
    '/',
    '/offline',
    '/css/index.css'
];

// Luister naar de 'Install' event van de Service Worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed');

    evt.waitUntil(
        caches.open(cache_name).then(cache => {
            console.log('Caching shell assets');
            return cache.addAll(assets).then(() => self.skipWaiting());
        })
            .catch(err => {
                console.error(err);
            })
    );
});

// Luister naar de 'Activate' event
self.addEventListener('activate', evt => {
    console.log('Service has been activated');
});

// Luister naar de 'Fetch' event
self.addEventListener('fetch', evt => {

    console.log('Fetch event', evt.request.url);


    evt.respondWith(caches.match(evt.request)
        .then(cachedResponse => {

            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(evt.request)
                .catch( err => {
                    return caches.open(cache_name)
                        .then(cache => cache.match('/offline'))
                })

        })
    );
});

// Bron: https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#3
// Bron: https://github.com/decrek/progressive-web-apps-1920