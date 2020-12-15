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
    "revision": "1f1d982bc0f63d51ee7158e1b4acce51"
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
    "url": "assets/js/10.1bb63940.js",
    "revision": "766491b63a9e4f44a758e90dc63d80f6"
  },
  {
    "url": "assets/js/11.a1fa2efb.js",
    "revision": "7321d42e35b3d874053047cf9189e339"
  },
  {
    "url": "assets/js/12.5c3d90af.js",
    "revision": "0bbeb030b0e2d4a700e85fb742b44c26"
  },
  {
    "url": "assets/js/13.756eacb7.js",
    "revision": "bf6b3e368773a267d4b527d1f3eba034"
  },
  {
    "url": "assets/js/14.cf477909.js",
    "revision": "080d6d3604393c9f3727dbe81e947c6f"
  },
  {
    "url": "assets/js/15.bcaee3b0.js",
    "revision": "f6a427422b52ed85cb8bdbd756f2ce0a"
  },
  {
    "url": "assets/js/16.60102174.js",
    "revision": "705c987413f6d8b80079e5f87b76fb8c"
  },
  {
    "url": "assets/js/17.5791d5c3.js",
    "revision": "8b7e64194d2098167ee048ca854b8e9c"
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
    "url": "assets/js/2.61b6ec73.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.a31548f6.js",
    "revision": "f12d1569309e9827d73afb87048a1e9f"
  },
  {
    "url": "assets/js/21.d65865cc.js",
    "revision": "35697af88d404fc066c641b8195cd8b1"
  },
  {
    "url": "assets/js/22.5b4b4078.js",
    "revision": "05b413376cf961414c2a4dc0415740ff"
  },
  {
    "url": "assets/js/23.85d1fd57.js",
    "revision": "8099baa77332f17a0eaaa2b9416769d0"
  },
  {
    "url": "assets/js/24.4e8c89e8.js",
    "revision": "c270481e42e319e3e756b013545c3132"
  },
  {
    "url": "assets/js/25.61b4ed6c.js",
    "revision": "d39e584b99c6ac620b2dec4c3d4ee65e"
  },
  {
    "url": "assets/js/26.0ea7f375.js",
    "revision": "dc36e50da2b16cfd7f752263a5affb12"
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
    "url": "assets/js/29.3b64fcfb.js",
    "revision": "6b7305622e3155634799ece2d3700c83"
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
    "url": "assets/js/31.aee04b78.js",
    "revision": "9d93cde3f6e31c875076d27fe98a87c4"
  },
  {
    "url": "assets/js/32.da698016.js",
    "revision": "d91679b283e9206093d440f929d1a886"
  },
  {
    "url": "assets/js/33.f2c18a73.js",
    "revision": "f770630636d90c53ad5ddce8cb636922"
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
    "url": "assets/js/app.8fd8b31e.js",
    "revision": "28c6fcd9bb6de45e563adfaeab8509aa"
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
    "revision": "fc5247b7433ddb9cfe6a74877912ee9f"
  },
  {
    "url": "frontend/css/anchor.html",
    "revision": "c6e699b207bf2c3b7a07953f45da68c5"
  },
  {
    "url": "frontend/css/bfc.html",
    "revision": "67ebf9c0c7ca0b3bbeb67421c26539ef"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "c99648a13fb04f99f529b965115bfd89"
  },
  {
    "url": "frontend/css/margin.html",
    "revision": "8364ff3e6e300472adc9071bb2727010"
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
    "revision": "f7d546da2628a7a9b0c4a63d92b6bd9c"
  },
  {
    "url": "guide/docs-style.html",
    "revision": "d9ab64fadc8f6e3632a886042212027c"
  },
  {
    "url": "guide/index.html",
    "revision": "c41bc24578c620af095804898e945d68"
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
    "revision": "57c64278730101548bd89d0375a550c2"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "b1582e909a571c7667c5d6692d484c10"
  },
  {
    "url": "more/interview/parse-url-parameter.html",
    "revision": "7af61c351e8c3233f948af2da1a1ff05"
  },
  {
    "url": "more/interview/script-tag-with-defer-and-async.html",
    "revision": "735cbb7f5dd908728939d42fd3998a77"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "34fb6053338ca0f5c9e82d46d5bcb288"
  },
  {
    "url": "tools/git/clone-project-to-server.html",
    "revision": "b96ac4e0001d0c9a0b174184fe8031ff"
  },
  {
    "url": "tools/git/daily-git.html",
    "revision": "913d4e3ba54f778850f314ab4ef17d5b"
  },
  {
    "url": "tools/git/git-concept.html",
    "revision": "adb74b7618b2997940e6beb7440ca9ec"
  },
  {
    "url": "tools/git/git-flight-rules.html",
    "revision": "91a75aa17b3ee5056f9ada7b45a2a4ba"
  },
  {
    "url": "tools/git/git-proxy.html",
    "revision": "fdb095bd90df3de0770c866b0c054103"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "49ab10fb458a444f8693452ba32cb369"
  },
  {
    "url": "tools/git/index.html",
    "revision": "d705e040ec0bfddf9638bef307887dbc"
  },
  {
    "url": "tools/github/config-github-hosts.html",
    "revision": "6bb060504c4e93a00a745fe1259345f9"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "25a9ff558619f12b78821827c577974c"
  },
  {
    "url": "tools/github/how-to-deploy-private-gitlab.html",
    "revision": "97566ae9c37161fa85e2352c6722a588"
  },
  {
    "url": "tools/github/index.html",
    "revision": "9059eb751a0035bef9cb6608143da715"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "13e398d03a4bcb73e68782e9b45b5e58"
  },
  {
    "url": "tools/github/sync-a-fork.html",
    "revision": "8b88a0126fceb73cb4498e012b1b2499"
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
