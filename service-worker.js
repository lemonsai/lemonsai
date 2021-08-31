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
    "revision": "6e94cde33ad698839a5ee4391851167a"
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
    "url": "assets/js/11.ed2174e5.js",
    "revision": "9ed1d10b943f19ae38710261e024abf9"
  },
  {
    "url": "assets/js/12.e2f1eacf.js",
    "revision": "2ad36c44b9fcd4e6d93bcc25a806fbdf"
  },
  {
    "url": "assets/js/13.5d43eb4f.js",
    "revision": "07df3bbf29605be34c93eaaf1cbcffc9"
  },
  {
    "url": "assets/js/14.25aaaee5.js",
    "revision": "d4e5d5563fe1b82b5dd07e02db8a5efd"
  },
  {
    "url": "assets/js/15.d28d2aca.js",
    "revision": "02f1c942d03d5a7004d255f371704900"
  },
  {
    "url": "assets/js/16.f50e5a79.js",
    "revision": "39d72245b7d2c008f26230bee7149549"
  },
  {
    "url": "assets/js/17.7293af45.js",
    "revision": "f96a5ec29d8ea9dcf49dcd96c958b06b"
  },
  {
    "url": "assets/js/18.15330eaf.js",
    "revision": "8f154d60cc0739531af9a25be51886b6"
  },
  {
    "url": "assets/js/19.4a9d5c44.js",
    "revision": "819bf7012f5a15760ed692ec6ebc1276"
  },
  {
    "url": "assets/js/2.c6e1839b.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.aaa620a9.js",
    "revision": "5414c84e1ecb2e53deeb25b804ed06fc"
  },
  {
    "url": "assets/js/21.8511ff8d.js",
    "revision": "ce61c2145b3fb58dd1688a389313ee06"
  },
  {
    "url": "assets/js/22.7f67006c.js",
    "revision": "044a1f490687034e08e593a4feb9f2dc"
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
    "url": "assets/js/8.7fd6716c.js",
    "revision": "6cabd7161a8191a6f3de07219cd9bc8f"
  },
  {
    "url": "assets/js/9.bcb7198e.js",
    "revision": "e08df2d61a446d1d3e592ce9caa6c5f3"
  },
  {
    "url": "assets/js/app.015004e3.js",
    "revision": "b19794ca50a7ad5f8eab40afe85bba5d"
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
    "revision": "3033a033cfa15c4592fd4330822f1981"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "c015f0bb3a68ccfd74aaad7cc29013ed"
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
    "revision": "fa247a76cb0078cfc4f7726e6517092a"
  },
  {
    "url": "frontend/component/index.html",
    "revision": "80a6db16c276982c42774ebc03b623d0"
  },
  {
    "url": "frontend/component/waterfallFlowLayout.html",
    "revision": "9689973f0169d8c7bf89c198ad3199f1"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "25e33cea902dc876f1d7ee82fb54a9a7"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "81b035cec53f70077b3cfd979c01d457"
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
    "revision": "6e63764633dd7fd523ac20a1325f332d"
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
    "revision": "ec7dfabbfa5b025a6b12e8f7011ffd80"
  },
  {
    "url": "guide/index.html",
    "revision": "a83e68c5ac6e355a36ea4924d701e2ca"
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
    "revision": "4da5a06425cec146a4e1be4e41eec80b"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "3712ca2559a2f16dc0e6e37553aa80d5"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "7c5e1900bc7bc8b2ba9fc1deef21d581"
  },
  {
    "url": "more/interview/sum-of-two-numbers.html",
    "revision": "90dfa68ea7acab6e75656edb3b3ab8ac"
  },
  {
    "url": "tools/github/index.html",
    "revision": "614970cb6ba12c179c82d94a8439e078"
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
