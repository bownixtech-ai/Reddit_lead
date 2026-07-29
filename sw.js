// Minimal service worker — just enough for installability.
// Not doing offline caching of API data in v1 on purpose (keep it simple);
// add a proper caching strategy later if you want offline support.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", () => {}); // no-op passthrough
