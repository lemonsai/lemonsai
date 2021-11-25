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
    "revision": "273f91f44e6a7cf4f1963ea6889dd715"
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
    "url": "assets/js/12.ba1c1ab7.js",
    "revision": "a3714ed81f6cb805c9e5a2b699fa5c1a"
  },
  {
    "url": "assets/js/13.805a02ff.js",
    "revision": "b563cba9650547120fa5e185e51c56e7"
  },
  {
    "url": "assets/js/14.9992aea2.js",
    "revision": "ac4cd7cad60a63db0fb247766fc8fcaf"
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
    "url": "assets/js/17.bdaaeb9f.js",
    "revision": "07dac9f4bc95ab3ac746c1ae1d2a55ab"
  },
  {
    "url": "assets/js/18.180e659b.js",
    "revision": "cf904260e22bfe6b24698cc66da487b3"
  },
  {
    "url": "assets/js/19.4487cc93.js",
    "revision": "362c58fb29da5c5d92748f78bf78b50f"
  },
  {
    "url": "assets/js/2.c6e1839b.js",
    "revision": "f3c372e161d180697b493e15c1975b6d"
  },
  {
    "url": "assets/js/20.b66bd5e1.js",
    "revision": "355d997446af7cf68d81b552850ca7f7"
  },
  {
    "url": "assets/js/21.be1218f9.js",
    "revision": "70d674d97b4f2b8cd160e0f34b8ae564"
  },
  {
    "url": "assets/js/22.7bf716b9.js",
    "revision": "3d6790e8b584f1c43ca54ec9c54e2f5f"
  },
  {
    "url": "assets/js/23.4ddb612a.js",
    "revision": "71a8e6a4b8e18e330c84e47ef1a1227a"
  },
  {
    "url": "assets/js/24.1bf600a1.js",
    "revision": "bff66123b81ac50f334a853a33b5e471"
  },
  {
    "url": "assets/js/25.13ccfb4d.js",
    "revision": "b0a0c42a42d76f5551692045959275de"
  },
  {
    "url": "assets/js/26.80645f92.js",
    "revision": "db6b9435c3c67bf87f5d96c84c93e875"
  },
  {
    "url": "assets/js/27.fcdefb13.js",
    "revision": "81e9a4f7d20b7684544cca040b983a2f"
  },
  {
    "url": "assets/js/3.2514a640.js",
    "revision": "5156444ffb324ba9a3d15d79ebec4295"
  },
  {
    "url": "assets/js/4.88bdfd00.js",
    "revision": "7f8a5445eace7e240f0b0d5f6a8baae3"
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
    "url": "assets/js/app.aff8e75d.js",
    "revision": "ccbcfc23d169aab43a0da4874f21d705"
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
    "revision": "f1646474f132ee0ad1e9299fcaa80a0d"
  },
  {
    "url": "frame/vue/index.html",
    "revision": "648ad4744a25b0051d8274bb45f21427"
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
    "revision": "13d774f4308324452b1be200488d34df"
  },
  {
    "url": "frontend/applets/getCode.html",
    "revision": "8ef5277b6b2f70dde5b02f6c22db0163"
  },
  {
    "url": "frontend/applets/index.html",
    "revision": "548d26b8ac2812ce29efa30be72a115c"
  },
  {
    "url": "frontend/component/cascader.html",
    "revision": "99b46af0a9339f32e6c750a89be44bb2"
  },
  {
    "url": "frontend/component/index.html",
    "revision": "e2a1ed3f613c970d001f3f780c8315c4"
  },
  {
    "url": "frontend/component/popups.html",
    "revision": "a2f4542d5c8c49f985755f177fc891a4"
  },
  {
    "url": "frontend/component/waterfallFlowLayout.html",
    "revision": "2ef8717d9624529ef428b24530593c4b"
  },
  {
    "url": "frontend/css/index.html",
    "revision": "89b483545ac319e17f50000b472b9394"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "6353d10d2860843ffdba84d8b8550846"
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
    "revision": "5a0c8d6ad843d6da537a63bd332ba57c"
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
    "revision": "4331f94352ff3449e1efd6297ed93457"
  },
  {
    "url": "guide/index.html",
    "revision": "ce21a782b0b3256a6b6b30e910ec5843"
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
    "revision": "09be6cbf2403a68d6523518df3092105"
  },
  {
    "url": "maomi.png",
    "revision": "ff9b12417aa7d64ad15f1d41ff758538"
  },
  {
    "url": "more/interview/index.html",
    "revision": "13091f56cd67fbf6c0c5b71365542771"
  },
  {
    "url": "more/interview/seo-optimization.html",
    "revision": "04260f8eb4560f08967fd59936cb72ff"
  },
  {
    "url": "more/interview/sum-of-two-numbers.html",
    "revision": "bb7b20c8d50b91414d780abeeb698456"
  },
  {
    "url": "tools/github/index.html",
    "revision": "9d1eb4f9f959e8e0062095ea515fe357"
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
