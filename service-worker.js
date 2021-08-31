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
<<<<<<< HEAD
    "revision": "77cf083b62191da17bc58d3ee8829026"
=======
    "revision": "9ad50932e56559a7debf2aeeb5ea10e7"
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
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
<<<<<<< HEAD
    "url": "assets/js/9.42345cd9.js",
    "revision": "748a6b2e4443b3775dd9b3bfd91bb5f3"
  },
  {
    "url": "assets/js/app.522d3c5b.js",
    "revision": "83e00c4de1c05f2f8a38f97e074baec7"
=======
    "url": "assets/js/9.5e8ba7bf.js",
    "revision": "9fe388424e3588a32017c946f318d5a2"
  },
  {
    "url": "assets/js/app.0ec11034.js",
    "revision": "e263830b61da0c3323a4252d0287136b"
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
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
<<<<<<< HEAD
    "revision": "514f642d12c21a72bc043d3c90d09edb"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "734179ef8bb5ce26fc76c9a4b1c3bc89"
=======
    "revision": "0303b14c8b65eda4a3d84d542335cab1"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "2303fa543d919e958f5717a0b5dc544a"
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
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
<<<<<<< HEAD
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
=======
    "revision": "a401cac40196649050f264feeda3e618"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "b10bbf3801bbd081efe744c22a8e2592"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "4c69d5205a6489b79c6a67237d53918d"
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
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
<<<<<<< HEAD
    "url": "frontend/javascript/time.html",
    "revision": "c77e890741adeb4dbd82eae02e0dbc63"
  },
  {
=======
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
    "url": "git/git_lifecycle.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "git/github-add-ssh-key.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "guide/about-me.html",
<<<<<<< HEAD
    "revision": "0d47602d36c56476cc12b64dff419c4d"
  },
  {
    "url": "guide/index.html",
    "revision": "d36652d02f3a30eec0ae6d50a418a9a9"
=======
    "revision": "c90c363863db8ea11bccda09978c5fb9"
  },
  {
    "url": "guide/index.html",
    "revision": "97b0cb7d1934c263302e79339846b773"
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
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
<<<<<<< HEAD
    "revision": "c3d932b14f77454cc0dc3b72e130c22e"
=======
    "revision": "ea1bc71177ff24b225299a154b2db68b"
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
<<<<<<< HEAD
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
=======
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
>>>>>>> 93f210e810e8b2a417b5dfc6d2a113b6f7d8b37e
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
