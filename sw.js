importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "aya-app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.62527e6a4c6608aa49e8.js",
    "revision": "e8afed64f6d7c9d5828163826ba012c4"
  },
  {
    "url": "/_nuxt/layouts/default.1d70cd36d30e9ff3d2fd.js",
    "revision": "e6c8d622c84cd2897aefaf19fa0f737b"
  },
  {
    "url": "/_nuxt/manifest.aefa53927702de5e7ea1.js",
    "revision": "3ccf63849755629d2641e2c447cf58eb"
  },
  {
    "url": "/_nuxt/pages/agence.6a4551dace0db1ccf146.js",
    "revision": "46f1568d7925862d9a4fcb02b928861d"
  },
  {
    "url": "/_nuxt/pages/contact.a1246f4c4fe96bff42b2.js",
    "revision": "03281a5f33dd307403cbf8cc4ca02779"
  },
  {
    "url": "/_nuxt/pages/index.ab8844760ad7b4bebe47.js",
    "revision": "d298091e571074962c5ee2bd96da2008"
  },
  {
    "url": "/_nuxt/pages/mentions.a7f05d48ec35715922d8.js",
    "revision": "827264b1a229eafaf4c659abff96670e"
  },
  {
    "url": "/_nuxt/pages/team.d918e593a067e36e3be2.js",
    "revision": "e039404035fb4f77dd5e6b90f94bb7eb"
  },
  {
    "url": "/_nuxt/pages/vision.017f40e2925b13d246e3.js",
    "revision": "55fda95ac6a9b8a15671e948662dce46"
  },
  {
    "url": "/_nuxt/pages/vision/concept.99961100a0e9e4e5fe58.js",
    "revision": "8eb3a23015f43967649815ddb64a6729"
  },
  {
    "url": "/_nuxt/pages/vision/craft.9219944c02f70573cc94.js",
    "revision": "6386150fc4fb3478ca2347444ccd3b6b"
  },
  {
    "url": "/_nuxt/pages/vision/creative.5720853e5a57ec6e6739.js",
    "revision": "f3d8c4cfba2e97012aff558b3198dbd7"
  },
  {
    "url": "/_nuxt/pages/vision/gui.0363ac18058d0045b17b.js",
    "revision": "7f69268fb0e6f64b41f10cd761768d87"
  },
  {
    "url": "/_nuxt/pages/vision/intent.bbffdc522c275931c0c2.js",
    "revision": "1e065eb4242b7b62a9ffc5ad7cf8d4cd"
  },
  {
    "url": "/_nuxt/pages/vision/intro.46993392ae82e5c0e68c.js",
    "revision": "acad7a0a12b53df2028c5a5af5f097d8"
  },
  {
    "url": "/_nuxt/pages/vision/tech.ad4988f23d57b931b845.js",
    "revision": "b3dba37cf6b03bb41b793c83c0bf50a1"
  },
  {
    "url": "/_nuxt/pages/vision/user.05930795ecfcdfefcbd6.js",
    "revision": "92103a83f2e9c5375223980f77ed44a5"
  },
  {
    "url": "/_nuxt/pages/vision/workflow.cee618ba528a345a3485.js",
    "revision": "d960fb8b149acf0ca209ef687eb38938"
  },
  {
    "url": "/_nuxt/pages/work/_slug.f93abe0821de397f9a3c.js",
    "revision": "18abff1d153005ee1275560b9e1ee900"
  },
  {
    "url": "/_nuxt/pages/work/index.27a7cfbb2a7f21d38d94.js",
    "revision": "5825116bdeff5ba662fc607943b1263c"
  },
  {
    "url": "/_nuxt/vendor.cf5a4f876058877d8d33.js",
    "revision": "fdd8c0bffb9dd75b6e76a2eb85baaf5c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

