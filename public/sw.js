const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
            addResourcesToCache([
                "/pwa-test/index.html",
                "/pwa-test/icons/icon128.png",
                "/pwa-test/manifest.json",
                "/pwa-test/sw.js",
                "/pwa-test/favicon.ico",
                ])
            );
});

self.addEventListener("fetch", () => {
    console.log('Fetched');
})