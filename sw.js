var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/sw.js',
    '/css/style.css',
    '/js/main.js'
];


/*Inicia o SW e armazena todo o conteudo em cache*/
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});


/*Habilita o uso do cache quando offline*/
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response){
            return response || fetch(e.request);
        })
    );
});
