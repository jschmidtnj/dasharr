// Name of the Cache.
const CACHE = "cacheV1";

// Select files for caching.
const urlsToCache = [
    "/",
    "/index.html",
    "/images",
    "/images/home.jpg",
    "/icons",
    "/icons/android-chrome-192x192.png",
    "/icons/android-chrome-512x512.png",
    "/icons/apple-touch-icon.png",
    "/icons/favicon-16x16.png",
    "/icons/favicon-32x32.png",
    "/icons/favicon.ico",
    "/scripts",
    "/scripts/pwa-handler.js"
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resourcefrom server.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
