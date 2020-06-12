/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  "/precache-manifest.c9d2268be0a6673415dfcdb4de826c3d.js"
=======
  "/precache-manifest.6525e79a38318ce6ec7a86ad9fe98f8b.js"
>>>>>>> parent of 6ff831a... Edited Demo
=======
  "/precache-manifest.6525e79a38318ce6ec7a86ad9fe98f8b.js"
>>>>>>> parent of 6ff831a... Edited Demo
=======
  "/precache-manifest.9bb69487f49a80bd9b717aa2fbfb52d6.js"
>>>>>>> parent of cb21f3f... Edited demo
=======
  "/revisor-msp/precache-manifest.b034dd7616cf9a2dcb3b49a82d023900.js"
>>>>>>> parent of 6269d02... Edited Demo
);

workbox.core.setCacheNameDetails({prefix: "revisor-msp"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
