self.addEventListener('install', (event) => {
    console.log('SW: instalado');

    const respCache = caches.open('cache-v1').then((cache) => {
        return cache.addAll([
            './',
            './js/app.js',
            './index.html',
            'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
            'https://reqres.in/api/users',
        ])
    });
    event.waitUntil(respCache);
})

self.addEventListener('fetch', (event) => {
    const respCac = caches.match(event.request);
    event.respondWith(respCac);
})