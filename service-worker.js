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
    "revision": "22b3a16bcc3b3a30f0200a536576c13b"
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
    "url": "assets/js/10.a1dc65c4.js",
    "revision": "0c8c02130d759dcd3c58d405ff3eae89"
  },
  {
    "url": "assets/js/11.a57cffab.js",
    "revision": "edbb84a570ba33398bd24d3648dc3cdb"
  },
  {
    "url": "assets/js/12.348f3196.js",
    "revision": "72bd60c86a6e53729bf3399455a7f033"
  },
  {
    "url": "assets/js/13.954a253c.js",
    "revision": "9072b4d6e5cc9c1ba07dc9ad496964ed"
  },
  {
    "url": "assets/js/14.9b4a6b0c.js",
    "revision": "27567ca7a02a287294b939f65a4d32d5"
  },
  {
    "url": "assets/js/15.debbb300.js",
    "revision": "def8e9741646d6571921aefde5f3b4c6"
  },
  {
    "url": "assets/js/16.e16c1ffa.js",
    "revision": "cef61914bb7d2cd5ee63de12ff2813e3"
  },
  {
    "url": "assets/js/17.c28b9135.js",
    "revision": "f469a5c4734609d283806d8ff133b695"
  },
  {
    "url": "assets/js/18.71b7333a.js",
    "revision": "714c2fe2a9c20245a2fc61230c595f0c"
  },
  {
    "url": "assets/js/19.25f480fe.js",
    "revision": "144aa15f220b063c57396c7469923b06"
  },
  {
    "url": "assets/js/2.61b6ec73.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.f94a12e6.js",
    "revision": "ad274c3c6f7155229348906b43b49aff"
  },
  {
    "url": "assets/js/21.6e432274.js",
    "revision": "1803979ba857451974e949a84807ecd8"
  },
  {
    "url": "assets/js/22.1ce7e7d6.js",
    "revision": "6d1e2bbc0d4d1c75fa8341664af8d2cc"
  },
  {
    "url": "assets/js/23.611c38cc.js",
    "revision": "d04821e78cf66663827550aecc37a02d"
  },
  {
    "url": "assets/js/24.af139f6d.js",
    "revision": "a6820e79d757999319077845c265e253"
  },
  {
    "url": "assets/js/25.5f7fb2a6.js",
    "revision": "d06eec20bda63e34e5a6085ba066f198"
  },
  {
    "url": "assets/js/26.8cac7bdd.js",
    "revision": "df79d59363e43e2eb5f4341d97040e9b"
  },
  {
    "url": "assets/js/27.886ee573.js",
    "revision": "75e0cc192a0277f2ce00437ac1a797bf"
  },
  {
    "url": "assets/js/28.06679146.js",
    "revision": "f72092c58bab266e2f400902fcb81ab3"
  },
  {
    "url": "assets/js/29.a756c70e.js",
    "revision": "6dc6489f093451bd19767d2b08e51034"
  },
  {
    "url": "assets/js/3.f31d052a.js",
    "revision": "75d183e1e534c25d190884ab09ab6c88"
  },
  {
    "url": "assets/js/30.6d9c54d8.js",
    "revision": "ec3dd517c72fa48eda0addf09f1045be"
  },
  {
    "url": "assets/js/31.6cdf1222.js",
    "revision": "ac3deb0a8b8fb0f163c7a8f1c717ec21"
  },
  {
    "url": "assets/js/32.955fec1e.js",
    "revision": "0d90b91188ef6379811c142dcc70b583"
  },
  {
    "url": "assets/js/33.18ee0b2c.js",
    "revision": "72e44f18e81d661ae662a102371daa9e"
  },
  {
    "url": "assets/js/34.ccd4bacf.js",
    "revision": "576ce958870e0874fac7aa9adacda456"
  },
  {
    "url": "assets/js/4.3d47995f.js",
    "revision": "5e7a90f2901308de7770060994b073dd"
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
    "url": "assets/js/9.454cb4cb.js",
    "revision": "fc1434d0a5f41f87752e9b674bba3da1"
  },
  {
    "url": "assets/js/app.dcc7a4f4.js",
    "revision": "1ee6a921ef632f124fa2b43b60a07d64"
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
    "url": "frontend/css/@font-face.html",
    "revision": "4f991fd85461685301902338a91fe13e"
  },
  {
    "url": "frontend/css/anchor.html",
    "revision": "8a0db72f0ffd1025e48f2ce1a5a2c28d"
  },
  {
    "url": "frontend/css/bfc.html",
    "revision": "e67d49e15471a13c44ffe145da680f7e"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "de9ac1e6334120b9cdf8bfacd16eb55d"
  },
  {
    "url": "frontend/css/margin.html",
    "revision": "1f10cef1406e785889e2e4b7c1f7bc7a"
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
    "revision": "764bc3da16abad6bef04332f14d7ace8"
  },
  {
    "url": "guide/docs-style.html",
    "revision": "2b55a5afcb4e1ea735b6eb2f265efca7"
  },
  {
    "url": "guide/index.html",
    "revision": "c651fdda5e5eaf7c3ca8288fcc3b9fd2"
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
    "revision": "1e4025d5bee4406f9998dd52337565a1"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "c14997f772752e096b9b588226d66944"
  },
  {
    "url": "more/interview/script-tag-with-defer-and-async.html",
    "revision": "e0d90da5153a45e527d45c3f0c62fe02"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "0f55e272e07a8ec4e68315894dc154a2"
  },
  {
    "url": "more/interview/sum-of-two-numbers.html",
    "revision": "18582abb73ff58dc3b48ea33ef139c65"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "5f6c15dbe320330639c20f6c12b3d0ae"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "199eedc842f4a7febc73c968b61fc416"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "93c7bc1c87ba38c7c24e6cd801c344dd"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "61dc1e911110d3c9265f2cfa3fad855f"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "0c20fe5c94c86cbf29a14bcd5a415110"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "f3b9d9377ec105cf84943d6b63759d40"
  },
  {
    "url": "tools/git/index.html",
    "revision": "c6f6b44484b2c472aad2f42de8a97ab3"
  },
  {
    "url": "tools/github/config-github-hosts.html",
    "revision": "9cda6b4866b55bf79e061f521673ebb7"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "ce94f3fe0601f330252e9007b72e4150"
  },
  {
    "url": "tools/github/how-to-deploy-private-gitlab.html",
    "revision": "152110e105d558e6cfab81f72aede6b8"
  },
  {
    "url": "tools/github/index.html",
    "revision": "5959595a0bc0db5fdc0ab0395308f07e"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "41fa10aa1e6fee767b9d23ac923db78c"
  },
  {
    "url": "tools/github/sync-a-fork.html",
    "revision": "d220aeed5eb1ddece3d2299041af33d5"
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
