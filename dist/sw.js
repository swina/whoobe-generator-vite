if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/block.element.1fa02bc3.js",revision:"680be4af3e0a89f7b13cede49f15ea21"},{url:"assets/index.4c7dd3fe.js",revision:"d6c4f21561fd750164f51e5e29a3c7e7"},{url:"assets/index.5e533746.css",revision:"d7ead2f91e016f1a0cbc970aa5b90eef"},{url:"assets/moka.chip.05176d78.js",revision:"99cbe6e9ff13f1bbc4fbc11e06255163"},{url:"assets/moka.list.9a5afdb7.js",revision:"d4b1ccd83735d01ee6243c07dc75dc91"},{url:"assets/moka.menu.b259748e.js",revision:"58c6b0215df5f21550b23b7292b737a1"},{url:"assets/moka.select.4bdefae7.js",revision:"2276ead6ace9c79d6b9830c68b16a055"},{url:"assets/moka.toggle.bc2200ce.js",revision:"a392fae0351a62a76698496a7ecca4dd"},{url:"assets/store.categories.9e3c7efa.js",revision:"7fab03bc9da949eca53ca882cd332ab4"},{url:"assets/vendor.eb162486.js",revision:"4866e9a1ed5feb8dd8aee97d2c26c838"},{url:"index.html",revision:"b62a19d2a8d6e9ffcd8f9abc509a64ea"},{url:"service-worker.js",revision:"5954a7430a71d95ebfb3f3304b8dd7ee"},{url:"icon-192x192.png",revision:"fecfa555d04baf2e4fbe76529e161826"},{url:"icon-256x256.png",revision:"5f3fee16df39192d8bf480b39dd7182c"},{url:"icon-384x384.png",revision:"efb3b8a100bc03987ce210770b71a7e5"},{url:"icon-512x512.png",revision:"7d22fa30701e93d3ae1a5a11b9b82fd4"},{url:"apple-touch-icon.png",revision:"e97e58074c383e22e0136c205f0fe82a"},{url:"manifest.webmanifest",revision:"6e1f4198352c7c55f8fc9fd92af0e4f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
