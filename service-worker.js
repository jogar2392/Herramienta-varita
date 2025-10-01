self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('varita-cache-v1').then(cache => {
      return cache.addAll(['index.html','manifest.json','icon-192.png','icon-512.png']);
    })
  );
  console.log('Service Worker instalado ✅');
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
