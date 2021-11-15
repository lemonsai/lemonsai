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
    "revision": "02d23c2b2766c302c7013c389de61c32"
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
    "url": "assets/js/11.1261087a.js",
    "revision": "0c9d8899e0d63f974349c859357bd8bd"
  },
  {
    "url": "assets/js/12.59e5372f.js",
    "revision": "2a4e56c110a7e168924b39e03618e823"
  },
  {
    "url": "assets/js/13.6927ed09.js",
    "revision": "f84f4710b02e2168e572e6f62d38b462"
  },
  {
    "url": "assets/js/14.9992aea2.js",
    "revision": "ac4cd7cad60a63db0fb247766fc8fcaf"
  },
  {
    "url": "assets/js/15.06c9a118.js",
    "revision": "9656da6220734193f69e13be04d84c1c"
  },
  {
    "url": "assets/js/16.f3dd9507.js",
    "revision": "e6badad8ee3a5a60c67e31869ffe4e67"
  },
  {
    "url": "assets/js/17.bdaaeb9f.js",
    "revision": "07dac9f4bc95ab3ac746c1ae1d2a55ab"
  },
  {
    "url": "assets/js/18.90889a1d.js",
    "revision": "9069d37d4949b43a1fa541f7c5814730"
  },
  {
    "url": "assets/js/19.33a3b9df.js",
    "revision": "7c97bfeac5a8609cc75a123684418e32"
  },
  {
    "url": "assets/js/2.c6e1839b.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.58b8b54c.js",
    "revision": "231cdf0f416636d81089eaa9ea841355"
  },
  {
    "url": "assets/js/21.af1665a7.js",
    "revision": "889a6ab6eb98edb0b4f541a3617ef4be"
  },
  {
    "url": "assets/js/22.46c23047.js",
    "revision": "eaee816db8f7bd7e26db2184fec8f8c6"
  },
  {
    "url": "assets/js/23.6ccef286.js",
    "revision": "a8f456aa64f6d608c6a7a04ef4ff2c86"
  },
  {
    "url": "assets/js/24.dd49f5a7.js",
    "revision": "2978397e314eceb9e222f008e9c8a870"
  },
  {
    "url": "assets/js/25.68062f33.js",
    "revision": "ec29f087c13c86770061905a4f6b0b57"
  },
  {
    "url": "assets/js/26.917d5d37.js",
    "revision": "e680b93c5f0b708c6da77e98e3e90ee3"
  },
  {
    "url": "assets/js/3.2514a640.js",
    "revision": "5156444ffb324ba9a3d15d79ebec4295"
  },
  {
    "url": "assets/js/4.bc2ea064.js",
    "revision": "1427054bd67cae68d29d622d77f4ba43"
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
    "url": "assets/js/9.bffcbb91.js",
    "revision": "1a3f0a7d188fad9b552eafcaf5d25b90"
  },
  {
    "url": "assets/js/app.1d5d3ac2.js",
    "revision": "3cb0e8be38b4556297c09353523f9e20"
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
    "url": "component/cascarder.png",
    "revision": "76d6212e7a77afa4da13a0a6dd5bfb5a"
  },
  {
    "url": "component/cascarder1.png",
    "revision": "65f9e8b29b37ca02ecc1bbb7dae3ab35"
  },
  {
    "url": "component/cascarder2.png",
    "revision": "979bb0666664976f8cde1312a8c9de29"
  },
  {
    "url": "frame/vue/compatible.html",
    "revision": "f22674227c75afa094612e26e876f885"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "8b758b6de9f7c1b4541af8f3f8df92d0"
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
    "revision": "e479cbb38ac361ae378667a59f736b72"
  },
  {
    "url": "frontend/applets/getCode.html",
    "revision": "134811e76c2572d050178e93dde5b6c8"
  },
  {
    "url": "frontend/applets/index.html",
    "revision": "55716043784024801fed28c60dae58fa"
  },
  {
    "url": "frontend/component/cascader.html",
    "revision": "5795d7674b5e8fc3df12d02ae1327d33"
  },
  {
    "url": "frontend/component/index.html",
    "revision": "1647a69c30b4e0879eb55159569af6d0"
  },
  {
    "url": "frontend/component/waterfallFlowLayout.html",
    "revision": "e78d3efa251378f6f6036123d0d5ca61"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "9531e35cbe3e98f1664fd86403f19ccd"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "0df805a9585c38f835239f94fcd38a70"
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
    "revision": "610531f9309023bb8ce92b6cde7c8500"
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
    "revision": "94783ec73e8cef0016a6e9a241844bf3"
  },
  {
    "url": "guide/index.html",
    "revision": "6b683c974bdc0e91350d2191ead46a1d"
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
    "revision": "eb3aaabe93ab637beb73fe818e0b169a"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "7922233ec3f8e72aa67468c0ca580769"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "125e650c5c448a3ef2ad6c233ab9037a"
  },
  {
    "url": "more/interview/sum-of-two-numbers.html",
    "revision": "7a256beefb1920653c37f0f40e1a2dc0"
  },
  {
    "url": "tools/github/index.html",
    "revision": "b80874f41004b37a850ceb13471c3533"
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
