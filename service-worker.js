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
    "revision": "6c8d5a25e526e9279f89ff1e7b01c688"
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
    "url": "assets/js/10.3df1be08.js",
    "revision": "ac1c33f6b53b262deab66dcf7535ae7b"
  },
  {
    "url": "assets/js/11.489401a9.js",
    "revision": "07231026d6701748e67e2bae5ead2077"
  },
  {
    "url": "assets/js/12.348f3196.js",
    "revision": "72bd60c86a6e53729bf3399455a7f033"
  },
  {
    "url": "assets/js/13.3c665b4d.js",
    "revision": "2ab6a95b3b09ebd945b0c34024f37c21"
  },
  {
    "url": "assets/js/14.a403bd6d.js",
    "revision": "0543c5a67449a42234b22b5efc87b3d4"
  },
  {
    "url": "assets/js/15.5d9e6450.js",
    "revision": "27c0516d0acd3bdede87db17a3510545"
  },
  {
    "url": "assets/js/16.a7fa145b.js",
    "revision": "03af293f6c1efbf22d896507e3ee951e"
  },
  {
    "url": "assets/js/17.4575d864.js",
    "revision": "5bc01dcda9a678e13edf3c23567b3b96"
  },
  {
    "url": "assets/js/18.e49de6ce.js",
    "revision": "2ca157ff02c763520879309bbba24008"
  },
  {
    "url": "assets/js/19.fa8d6ea8.js",
    "revision": "9272127c9b4c83488a8c3b75065e5e76"
  },
  {
    "url": "assets/js/2.631a39b3.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.6aa2ceac.js",
    "revision": "76178cfcbfeb39a5f97f209c61072c7f"
  },
  {
    "url": "assets/js/21.6e432274.js",
    "revision": "1803979ba857451974e949a84807ecd8"
  },
  {
    "url": "assets/js/22.5b4b4078.js",
    "revision": "05b413376cf961414c2a4dc0415740ff"
  },
  {
    "url": "assets/js/23.611c38cc.js",
    "revision": "d04821e78cf66663827550aecc37a02d"
  },
  {
    "url": "assets/js/24.5e2d3358.js",
    "revision": "78891975c631ff98308b55314019ab31"
  },
  {
    "url": "assets/js/25.5f7fb2a6.js",
    "revision": "d06eec20bda63e34e5a6085ba066f198"
  },
  {
    "url": "assets/js/26.dc642afc.js",
    "revision": "4c44f3aaabd5e74142d8b6b26806bea5"
  },
  {
    "url": "assets/js/27.886ee573.js",
    "revision": "75e0cc192a0277f2ce00437ac1a797bf"
  },
  {
    "url": "assets/js/28.f6b66183.js",
    "revision": "d78d25531ba1434bb6de22caeff67e4c"
  },
  {
    "url": "assets/js/29.36a6ab06.js",
    "revision": "cd34a0bfb4057036a6102c1f6dd4f6a5"
  },
  {
    "url": "assets/js/3.f31d052a.js",
    "revision": "75d183e1e534c25d190884ab09ab6c88"
  },
  {
    "url": "assets/js/30.f08f8003.js",
    "revision": "4e91c3087a130ce55c498f88d2157eb3"
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
    "url": "assets/js/8.16333890.js",
    "revision": "4b4b51d751bd72e732c0c5ca1487f4e5"
  },
  {
    "url": "assets/js/9.010bb03a.js",
    "revision": "8ca37173f956b66b9a8df9a694be87e2"
  },
  {
    "url": "assets/js/app.636402ce.js",
    "revision": "f4407b933cf2a82ab93a8591f6dfcaed"
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
    "revision": "f10fee09e9fbc65d3e27437ee0fa96b3"
  },
  {
    "url": "frontend/css/anchor.html",
    "revision": "f957afd9e3a10682e468a5e6472674df"
  },
  {
    "url": "frontend/css/bfc.html",
    "revision": "d35380992d7b9d5be967d6ef6c5d3deb"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "0a73ed4903943fdd61a9b68790f83edd"
  },
  {
    "url": "frontend/css/margin.html",
    "revision": "5b55be466c909fe06965d4b9e589e2f4"
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
    "revision": "fd5f69eb7cc5bee2e4f8e21daee28223"
  },
  {
    "url": "guide/docs-style.html",
    "revision": "002489e6be9f501efe60e201a8cf11ed"
  },
  {
    "url": "guide/index.html",
    "revision": "df5fd6ef364cb3ff8ec651d6c07534ea"
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
    "revision": "2121f0f5b019bd23537468dfd565d187"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "87ebcd8c9445d8d5858766df66e312bf"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "6df951cd151024c9c9754e1277f68bfa"
  },
  {
    "url": "more/interview/script-tag-with-defer-and-async.html",
    "revision": "ae15b25b1a54d50b27acba91e52b0cd3"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "99239042a94ccb9eb8b844fe65747533"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "6c44d6bd7c9d2cf4a7a14261385ba4a4"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "a04612011b69651cbcf9d46167c0a017"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "88023d6ebf8a2fe514e4e4e224c511b1"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "0770f07b0de795d39212c397cd186a83"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "a9a3e320b48101a62b7e01aa8af7371a"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "79ac3f6fb164ec952b8bfbda6127cd27"
  },
  {
    "url": "tools/git/index.html",
    "revision": "2ccf8873627ba61f8404e5155922d500"
  },
  {
    "url": "tools/github/config-github-hosts.html",
    "revision": "b7b3858f5fe489933cde19b066032588"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "2142d02f16a7285e788995704cf759fa"
  },
  {
    "url": "tools/github/how-to-deploy-private-gitlab.html",
    "revision": "5e0392a757d7bd4acdadcb31ece24f5a"
  },
  {
    "url": "tools/github/index.html",
    "revision": "1c4f4fa53b94eec40d972d167d1cd837"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "d0dba4a33bd627aef06dfa2bc688dde8"
  },
  {
    "url": "tools/github/sync-a-fork.html",
    "revision": "85bbc90b8af6413d493475c4bff7874b"
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
