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
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9ad50932e56559a7debf2aeeb5ea10e7"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "242acf62de16f0a38ae9ff21501f0f13"
  },
  {
    "url": "assets/css/0.styles.516a963f.css",
    "revision": "1c3776b25628920816158b9c138f38b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bedcc4a4.js",
    "revision": "eb3db6a4eacc3698d67693edd9e9bdad"
  },
  {
    "url": "assets/js/11.89ab1246.js",
    "revision": "8d0d5bfd0a4dd891404af681b66ffd88"
  },
  {
    "url": "assets/js/12.59e5372f.js",
    "revision": "2a4e56c110a7e168924b39e03618e823"
  },
  {
    "url": "assets/js/13.deb570b7.js",
    "revision": "ac97474a6603952723f8e3f73cbe003d"
  },
  {
    "url": "assets/js/14.7490e052.js",
    "revision": "4bb4bd080038648ebfa56af3cb7a5f01"
  },
  {
    "url": "assets/js/15.979461dc.js",
    "revision": "dc868229b037a0c760b4a841a75936a3"
  },
  {
    "url": "assets/js/16.040dd5b6.js",
    "revision": "bdfca53e34f3df0d8332a44728d42a83"
  },
  {
    "url": "assets/js/17.e5813f87.js",
    "revision": "b1cb894be343ec6df60dc4f7c7886787"
  },
  {
    "url": "assets/js/18.6ec8300b.js",
    "revision": "01a56293ad165478851b7cea43465d9f"
  },
  {
    "url": "assets/js/19.1c32f658.js",
    "revision": "1bd6342f6fce1654325b264900eb52d6"
  },
  {
    "url": "assets/js/2.2ae01976.js",
    "revision": "3a5e3895eedb7ac2988d9508fc31627f"
  },
  {
    "url": "assets/js/20.a8b4e9b7.js",
    "revision": "7fbda722141c7dfcff500e1f621cbca6"
  },
  {
    "url": "assets/js/3.97cf4955.js",
    "revision": "d25a74ae6c47b256b32c268999d69187"
  },
  {
    "url": "assets/js/4.cbf4922d.js",
    "revision": "16b6133b525fb01b6d1a02168317084c"
  },
  {
    "url": "assets/js/5.1f4073b2.js",
    "revision": "bc00cbf88a77f78b66c04395eb55049d"
  },
  {
    "url": "assets/js/6.dfa810f9.js",
    "revision": "f8b0e1a26e30b7e2c45d218c01a6588f"
  },
  {
    "url": "assets/js/7.170c203a.js",
    "revision": "cac879d185fda16c22ef889060303b00"
  },
  {
    "url": "assets/js/8.c94a55c6.js",
    "revision": "49d6f39d52667026f9c76db2652cf60a"
  },
  {
    "url": "assets/js/9.5e8ba7bf.js",
    "revision": "9fe388424e3588a32017c946f318d5a2"
  },
  {
    "url": "assets/js/app.0ec11034.js",
    "revision": "e263830b61da0c3323a4252d0287136b"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "frame/vue/compatible.html",
    "revision": "0303b14c8b65eda4a3d84d542335cab1"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "2303fa543d919e958f5717a0b5dc544a"
  },
  {
    "url": "frame/vue/jianrongie.png",
    "revision": "c0e3a5c12ca138ca6cb667a4fc3cf463"
  },
  {
    "url": "frame/vue/postcss.png",
    "revision": "9e03a3144975458bfb409210b8d01481"
  },
  {
    "url": "frame/vue/vuePc.html",
    "revision": "a401cac40196649050f264feeda3e618"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "b10bbf3801bbd081efe744c22a8e2592"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "4c69d5205a6489b79c6a67237d53918d"
  },
  {
    "url": "frontend/javascript/prototype-chains-function.jpg",
    "revision": "8eedf7b0b7a667ee145161d4a53f23a9"
  },
  {
    "url": "frontend/javascript/prototype-chains.jpg",
    "revision": "eaeeff3482a626079a774577eff9aeec"
  },
  {
    "url": "git/git_lifecycle.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "git/github-add-ssh-key.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "guide/about-me.html",
    "revision": "c90c363863db8ea11bccda09978c5fb9"
  },
  {
    "url": "guide/index.html",
    "revision": "97b0cb7d1934c263302e79339846b773"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "ea1bc71177ff24b225299a154b2db68b"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "e8f05a55342f96d62825ea03c76f6086"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "0fe92c9d000cb8ab2d455de75b09f303"
  },
  {
    "url": "more/interview/sum-of-two-numbers.html",
    "revision": "67e720f57d408cb47cb5eb39f1ebbc6e"
  },
  {
    "url": "tools/github/index.html",
    "revision": "eebfef3e3c8e4268c2d017182dbe4379"
  },
  {
    "url": "zhu.png",
    "revision": "ff186454faaf7e25c51dd68eaeef37f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
