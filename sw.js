const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/tarefas_PWA/',
    '/tarefas_PWA/index.html',
    '/tarefas_PWA/style.css',
    '/tarefas_PWA/manifest.json',
   '/icons/elite.png',
    '/icons/mestre.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});


