if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,c,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/block.element.cb469cff.js",revision:"bec31875b1a3a4cca4350d765fc09dac"},{url:"assets/index.01f3e96f.css",revision:"ae4fd60f46fda7b1c63b07c73adb6026"},{url:"assets/index.816d18c6.js",revision:"5cba0c55a0c7f2637c782ff9c268e81a"},{url:"assets/moka.chip.9b239878.js",revision:"05eb3cff256a2c4dc453d1ee4c77c0c1"},{url:"assets/moka.list.d9f0146d.js",revision:"7bd3c24b89b3ad6c14b4e6f0f7e87410"},{url:"assets/moka.menu.ab47b81d.js",revision:"3c77582dfc81ad12271442f69c3599b0"},{url:"assets/moka.select.731d124f.js",revision:"b3cef57799ad06a38d74b2433c34fac6"},{url:"assets/moka.toggle.f832c769.js",revision:"98b488e74da95ef6915687647b41f5c9"},{url:"assets/store.categories.efd07d46.js",revision:"a535c1cb18bf2e6fd26a22bd98f09617"},{url:"assets/vendor.eb162486.js",revision:"4866e9a1ed5feb8dd8aee97d2c26c838"},{url:"index.html",revision:"dc1e6dcbc53b7fee052032d43e2f067b"},{url:"service-worker.js",revision:"5954a7430a71d95ebfb3f3304b8dd7ee"},{url:"icon-192x192.png",revision:"fecfa555d04baf2e4fbe76529e161826"},{url:"icon-256x256.png",revision:"5f3fee16df39192d8bf480b39dd7182c"},{url:"icon-384x384.png",revision:"efb3b8a100bc03987ce210770b71a7e5"},{url:"icon-512x512.png",revision:"7d22fa30701e93d3ae1a5a11b9b82fd4"},{url:"apple-touch-icon.png",revision:"e97e58074c383e22e0136c205f0fe82a"},{url:"manifest.webmanifest",revision:"6e1f4198352c7c55f8fc9fd92af0e4f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
