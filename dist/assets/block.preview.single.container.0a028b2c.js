import{n as e,_ as t}from"./index.8e37072e.js";import"./vendor.47e86619.js";const r={};var n=e({name:"BlockPreviewSingleContainer",components:{"block-element":()=>t((()=>import("./block.element.71a90881.js")),["/assets/block.element.71a90881.js","/assets/vendor.47e86619.js","/assets/index.8e37072e.js","/assets/index.46729c00.css"])},props:["doc","coords","pos"],data:()=>({index:0,position:null,modal:!0}),computed:{zindex(){return this.$attrs.level<1?"auto":this.$attrs.level<2?1:this.$attrs.level},root(){return this.$attrs.top?0:parseInt(this.$attrs.level)}},methods:{elementAction(e){this.$emit("action",e)},classe:e=>e.hasOwnProperty("css")?e.css+" "+e.container:e,stile(e,t){if(!e||!t)return;let r="";return e.hasOwnProperty("fontFamily")&&(r+='font-family:"'+e.fontFamily+'"; '),e.hasOwnProperty("style")?e.style+r:r},background(e){return e&&e.hasOwnProperty("image")&&e.image&&e.image.url?" background-image:url("+this.$imageURL(e.image)+");":""},setImageBackground(e){if(!e)return"";return" background-image:url("+this.$imageURL(e)+")"}}},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.doc?r("div",{ref:e.doc.id,class:e.classe(e.doc.css),style:e.doc.style+" "+e.background(e.doc),attrs:{id:e.doc.hasOwnProperty("anchor")?e.doc.anchor:e.doc.id}},[e._l(e.doc.blocks,(function(t,n){return[t&&!t.hasOwnProperty("blocks")||t.hasOwnProperty("items")?r("block-element",{key:t.id,attrs:{data:e.$attrs.data||null,currency:e.$attrs.currency||null,element:t,develop:!1},on:{click:e.elementAction}}):e._e(),t&&t.hasOwnProperty("blocks")&&!t.hasOwnProperty("blocks_flip")?r("block-preview-single-container",{key:t.id,attrs:{data:e.$attrs.data||null,currency:e.$attrs.currency||null,component:e.$attrs.component,top:!1,index:n,level:parseInt(e.$attrs.level)+1,doc:t}}):e._e()]}))],2):e._e()}),[],!1,(function(e){for(let t in r)this[t]=r[t]}),null,null,null);n.options.__file="src/components/blocks/block.preview.single.container.vue";var o=n.exports;export default o;
