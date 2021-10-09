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
    "revision": "de26403f59a8c1e1fe20f40100370b4c"
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
    "url": "assets/js/11.946713a2.js",
    "revision": "53141027f08ddb0fbfc3873233aa6493"
  },
  {
    "url": "assets/js/12.ba1c1ab7.js",
    "revision": "a3714ed81f6cb805c9e5a2b699fa5c1a"
  },
  {
    "url": "assets/js/13.6f1134fc.js",
    "revision": "290f1953583ef521ed605b18c0f682a3"
  },
  {
    "url": "assets/js/14.ddd9b2b8.js",
    "revision": "f780be5837c8db7801f1702d6c22eea3"
  },
  {
    "url": "assets/js/15.efff758f.js",
    "revision": "2efcd27b2f8a57c064fa5de57f499a9f"
  },
  {
    "url": "assets/js/16.a96186e2.js",
    "revision": "a7f3741df175a133d74877bfea19fcda"
  },
  {
    "url": "assets/js/17.d426b49a.js",
    "revision": "cf4f78486458484e81337b9adf69d2cc"
  },
  {
    "url": "assets/js/18.8c8f4447.js",
    "revision": "295eaeb7337906152192ed2f90777d6b"
  },
  {
    "url": "assets/js/19.f7cf1c78.js",
    "revision": "65515473e412787f8bff81d62a6915af"
  },
  {
    "url": "assets/js/2.c6e1839b.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.6a1934a5.js",
    "revision": "ec11505964877a8d275e70a48dcb77db"
  },
  {
    "url": "assets/js/21.ff79deab.js",
    "revision": "d9618af448ae0f3fd5e158013428ed14"
  },
  {
    "url": "assets/js/22.097b706d.js",
    "revision": "900a0186e399c4a46725e645ba950011"
  },
  {
    "url": "assets/js/23.8e7aaac4.js",
    "revision": "e24fe6f2aefb0c030bc961a1e0cc889b"
  },
  {
    "url": "assets/js/24.aecce294.js",
    "revision": "ceeec73232daa1c8002452d04edf449f"
  },
  {
    "url": "assets/js/25.484de530.js",
    "revision": "8112fa59142b576562a50b91efd70641"
  },
  {
    "url": "assets/js/3.2514a640.js",
    "revision": "5156444ffb324ba9a3d15d79ebec4295"
  },
  {
    "url": "assets/js/4.93e79796.js",
    "revision": "6a8620aae5a94e26d1be5008e29e008e"
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
    "url": "assets/js/8.150b62ac.js",
    "revision": "c0a030873dae132378c4b6504e5b2f12"
  },
  {
    "url": "assets/js/9.6a2c1cc4.js",
    "revision": "8fda429c69b4fe201ef96a750e4939a2"
  },
  {
    "url": "assets/js/app.fcaf8a56.js",
    "revision": "26a53983f773c4959e1e8d402066f338"
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
    "revision": "c9f87b79a17780954db57b84b3f7a2a7"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "c57d153ce68b5a9b52825cdb83e023c2"
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
    "revision": "74e1286614b294992d8471cc507a68b9"
  },
  {
    "url": "frontend/applets/getCode.html",
    "revision": "5ff366e9dfc37d49d37b100d5ae127b2"
  },
  {
    "url": "frontend/applets/index.html",
    "revision": "e15a180d440ebcd1a9b881c92c0a4510"
  },
  {
    "url": "frontend/component/index.html",
    "revision": "5d8452f5fa2a6018e188e40e3ae58855"
  },
  {
    "url": "frontend/component/waterfallFlowLayout.html",
    "revision": "93f8e9fdcdd0adef07b7fada0bb7c4e5"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "55839e3cd43492d14b6570d9b6fd4663"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "509773c9f0221f26a70ffb53f892ea99"
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
    "revision": "9ea80b074d95a6ada9f80a9463086888"
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
    "revision": "1a884b6c145a4be3a4bee3b9e85f25fa"
  },
  {
    "url": "guide/index.html",
    "revision": "3ac65ffa5f935260a68b209263543f50"
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
    "revision": "e5bb86b727c5cb837f9314ce8972d191"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "82e2b661385a8f66f3c5c38589aac0c4"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "501043a0a3b7564742ea5f1431b4a7a9"
  },
  {
    "url": "more/interview/sum-of-two-numbers.html",
    "revision": "24d5ddd84c5becc37f59f4fad263102a"
  },
  {
    "url": "tools/github/index.html",
    "revision": "374ab46fa374724f1c4d962f5cc91ce4"
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
