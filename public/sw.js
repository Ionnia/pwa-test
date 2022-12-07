self.addEventListener('install', () => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});