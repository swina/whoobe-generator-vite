if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/block.element.afa826be.js",revision:"572ca22e90c1e4364e905e2f496b7acf"},{url:"assets/index.9c432c47.css",revision:"04646ed4dd25a2901a4fe035df29046e"},{url:"assets/index.9ed806d8.js",revision:"536574988aad7eaf6b468ea2b88b8769"},{url:"assets/moka.chip.23180082.js",revision:"da132a22cfa92475bb9065d56c473001"},{url:"assets/moka.list.6ad6fe67.js",revision:"da188779049b9be63a6dd76c3577cc6b"},{url:"assets/moka.menu.78f19391.js",revision:"61bbc93704be5ce2c116abb576fceda5"},{url:"assets/moka.select.968de20d.js",revision:"418095d9c37c6d989d45624f18e726e0"},{url:"assets/moka.toggle.0675aad8.js",revision:"47490689776d017bceb2863acb73740f"},{url:"assets/store.categories.b0c66f94.js",revision:"73dc581051521d4e7108bb7f03c88ce3"},{url:"assets/vendor.eb162486.js",revision:"4866e9a1ed5feb8dd8aee97d2c26c838"},{url:"index.html",revision:"dd3b409bbf5b576ebe96174c64356bb3"},{url:"service-worker.js",revision:"5954a7430a71d95ebfb3f3304b8dd7ee"},{url:"icon-192x192.png",revision:"fecfa555d04baf2e4fbe76529e161826"},{url:"icon-256x256.png",revision:"5f3fee16df39192d8bf480b39dd7182c"},{url:"icon-384x384.png",revision:"efb3b8a100bc03987ce210770b71a7e5"},{url:"icon-512x512.png",revision:"7d22fa30701e93d3ae1a5a11b9b82fd4"},{url:"apple-touch-icon.png",revision:"e97e58074c383e22e0136c205f0fe82a"},{url:"manifest.webmanifest",revision:"6e1f4198352c7c55f8fc9fd92af0e4f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
