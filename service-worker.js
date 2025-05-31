const CACHE_NAME = "juzamma-app-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./quran.json",
  "./manifest.json",
  "./sounds/correct.mp3",
  "./sounds/wrong.mp3",
  // Add all your letter mp3s here!
  "./Letters/001-alif.mp3",
  "./Letters/002-baa.mp3",
  "./Letters/003-taa.mp3",
  // ... etc ...
  // Add your icons
  "./icon-192.png",
  "./icon-512.png"
];

// Install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
