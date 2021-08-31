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
    "revision": "77cf083b62191da17bc58d3ee8829026"
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
    "url": "assets/js/10.1fb2b51f.js",
    "revision": "a8ddc8bba081eb581c4346ede0accef8"
  },
  {
    "url": "assets/js/11.88ee4a30.js",
    "revision": "de490f1c62cc9a4a3e4540e806075d6a"
  },
  {
    "url": "assets/js/12.ba1c1ab7.js",
    "revision": "a3714ed81f6cb805c9e5a2b699fa5c1a"
  },
  {
    "url": "assets/js/13.3f954fc0.js",
    "revision": "d88664eed9f9aadab1b35f7511902232"
  },
  {
    "url": "assets/js/14.25aaaee5.js",
    "revision": "d4e5d5563fe1b82b5dd07e02db8a5efd"
  },
  {
    "url": "assets/js/15.389936a6.js",
    "revision": "04126b2e55be5ae127cb0d08ce9cff03"
  },
  {
    "url": "assets/js/16.087f3602.js",
    "revision": "e3da5acb1869d87c66aee629bad09618"
  },
  {
    "url": "assets/js/17.7986d7df.js",
    "revision": "3d704f9a057216299c2c62c04948c540"
  },
  {
    "url": "assets/js/18.3de35dd6.js",
    "revision": "a61b0855436ca387eb35cf7ec1b786f5"
  },
  {
    "url": "assets/js/19.8d2710d6.js",
    "revision": "13003e5530bb03f6638d5edfe802c673"
  },
  {
    "url": "assets/js/2.c6e1839b.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.8f9bc6c5.js",
    "revision": "1f021f436e83f365b416471b3533f78a"
  },
  {
    "url": "assets/js/21.26f2b630.js",
    "revision": "416b0ab9bfc95552337709cf1134f2fd"
  },
  {
    "url": "assets/js/22.8ae45419.js",
    "revision": "58af8d474151e2779e533ec552cbf169"
  },
  {
    "url": "assets/js/23.deb67d31.js",
    "revision": "9aa417660e1ec16ae73947b5ebdce484"
  },
  {
    "url": "assets/js/3.2514a640.js",
    "revision": "5156444ffb324ba9a3d15d79ebec4295"
  },
  {
    "url": "assets/js/4.9febcdb7.js",
    "revision": "aad62cbe7b3277f42d8136a2403f102a"
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
    "url": "assets/js/9.42345cd9.js",
    "revision": "748a6b2e4443b3775dd9b3bfd91bb5f3"
  },
  {
    "url": "assets/js/app.522d3c5b.js",
    "revision": "83e00c4de1c05f2f8a38f97e074baec7"
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
    "revision": "514f642d12c21a72bc043d3c90d09edb"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "734179ef8bb5ce26fc76c9a4b1c3bc89"
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
    "revision": "a8a188d7318ba1666170ece9b0999452"
  },
  {
    "url": "frontend/component/index.html",
    "revision": "1a7fe427bccd9635837d9f7e0f2e3047"
  },
  {
    "url": "frontend/component/waterfallFlowLayout.html",
    "revision": "ebf74d93221feb46ed244883379ecc58"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "1d7beafee94036e21975c8ea1b428ec1"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "cfa9bd1ba097124fd1c86d380c26488e"
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
    "url": "frontend/javascript/time.html",
    "revision": "c77e890741adeb4dbd82eae02e0dbc63"
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
    "revision": "0d47602d36c56476cc12b64dff419c4d"
  },
  {
    "url": "guide/index.html",
    "revision": "d36652d02f3a30eec0ae6d50a418a9a9"
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
    "revision": "c3d932b14f77454cc0dc3b72e130c22e"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "1f812fcf72a259c03f9601a7cc87004b"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "e9e580a79eaa212ef79ec84726e5fed3"
  },
  {
    "url": "more/interview/sum-of-two-numbers.html",
    "revision": "b0ac6e34dcb8b122876473c689f6f484"
  },
  {
    "url": "tools/github/index.html",
    "revision": "4d47493952a015e58e14418caf86f10d"
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
