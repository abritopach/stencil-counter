importScripts('workbox-sw.prod.v2.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.global.js",
    "revision": "2eab51fa98ed28b23cf1de2416e32427"
  },
  {
    "url": "build/app.js",
    "revision": "28fff7888bf2f5537d620cd42001fb09"
  },
  {
    "url": "build/app.registry.json",
    "revision": "ba175412eb6f88267f9d592bfb7c2d07"
  },
  {
    "url": "build/app/16mmk3yb.css",
    "revision": "fcccdfc2a1995c09e03fe79dfb979c7d"
  },
  {
    "url": "build/app/3liu3y3j.js",
    "revision": "4599dcfa9154fe1d079d829da55b7059"
  },
  {
    "url": "build/app/app.8x4gnafy.pf.js",
    "revision": "27eb36daca8bb0f05c846b69e71b3594"
  },
  {
    "url": "build/app/app.audakvld.js",
    "revision": "84355b9b503a6aade2b973aa698f60b2"
  },
  {
    "url": "build/app/if0opbrp.js",
    "revision": "921a0f2053ba0a1728845286a22d9e61"
  },
  {
    "url": "build/app/imd9xidt.js",
    "revision": "2286d47e08db8815a3d1046e6f67975d"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "26a666ecc409aa86a65f33bbacab0b4c"
  },
  {
    "url": "manifest.json",
    "revision": "2a184e97fcded4850709730575c65e19"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
