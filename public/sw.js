const static_cache_name = 'site-static';
const assets = [
    '/',
    '/offline',
    '/css/index.css'
];


// Install Service    Worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed');

    evt.waitUntil(
        caches.open(static_cache_name).then(cache => {
            console.log('Caching shell assets');
            return cache.addAll(assets).then(() => self.skipWaiting());
        })
            .catch(err => {
                console.error(err);
            })
    );
});

// Activate event
self.addEventListener('activate', evt => {
    console.log('Service has been activated');
});


self.addEventListener('fetch', evt => {

    console.log('Fetch event', evt.request.url);

    evt.respondWith(caches.match(evt.request)
        .then(cachedResponse => {

            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(evt.request)
                .catch( err => {
                    return caches.open(static_cache_name)
                        .then(cache => cache.match('/offline'))
                })

        })
    );
});