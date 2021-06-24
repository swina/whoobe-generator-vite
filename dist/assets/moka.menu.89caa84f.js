import{_ as e,n as s,a as t,B as n}from"./index.abbff2a9.js";import i from"./block.element.16b265fe.js";import{g as o,S as l}from"./vendor.8bb14361.js";o.registerPlugin(l);const r={};var a=s({name:"BlockMenuContainer",props:["doc"],computed:{animations:()=>gsapEffects,refreshAnimation(){return!(!this.$attrs.current||this.$attrs.current!==this.doc.id)&&(this.animate(this.doc,this.doc.id),!0)}},methods:{classe(e){if(e)return e.hasOwnProperty("css")?e.css+" "+e.container:e},stile(e,s){if(!e||!s)return;let t="";return e.hasOwnProperty("fontFamily")&&(t+='font-family:"'+e.fontFamily+'"; '),e.hasOwnProperty("style")?e.style+t:t},background(e){if(e)return e.hasOwnProperty("image")?" background-image:url("+this.$imageURL(e.image)+");":""},elementAction(e){this.$emit("action",e)},animate(e,s){if(e&&this.$refs&&e.hasOwnProperty("gsap")&&e.gsap.animation){let t=o.effects[e.gsap.animation](this.$refs[s],{trigger:this.$refs[s],duration:parseFloat(e.gsap.duration),delay:parseFloat(e.gsap.delay),ease:e.gsap.ease});l.create({id:s,start:"top 99%",trigger:this.$refs[s],toggleActions:"play pause restart none",animation:t,onEnter:()=>{e.gsap.delay?t.play():t.play(0)}})}}},mounted(){window.scrollTo(0,0),this.doc&&this.doc.hasOwnProperty("gsap")&&this.doc.gsap.animation&&this.animate(this.doc,this.doc.id)}},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return s.doc?n("div",{key:s.doc.id,ref:s.doc.id,class:s.classe(s.doc.css),style:s.doc.style+" "+s.background(s.doc),attrs:{id:s.doc&&s.doc.hasOwnProperty("anchor")?s.doc.anchor:s.doc.id,animateMe:s.refreshAnimation}},[s._l(s.doc.blocks,(function(t,o){return[t&&!t.hasOwnProperty("blocks")?n(i,{key:t.id,attrs:{element:t,coords:[o],refreshAnimation:s.refreshAnimation||s.$attrs.refreshAnimation,develop:!1},on:{click:s.elementAction}}):s._e(),t&&"plugin"===t.type&&t.hasOwnProperty("blocks")?n(e,{key:t.id,attrs:{settings:t.plugin.editor.settings,block:t,plugin:t,component:t.plugin.component}}):s._e()]}))],2):s._e()}),[],!1,(function(e){for(let s in r)this[s]=r[s]}),null,null,null);a.options.__file="src/components/blocks/block.menu.container.vue";var c=a.exports;const u={};var m=s({name:"BlockPreviewMenu",props:["el"],components:{BlockPreviewElement:n,BlockPreviewSingleContainer:c},data:()=>({submenu:null,submenu_id:null,width:0,menu_responsive:!1,responsive:!1,clientY:0}),computed:{menuContainerCSS(){let e=this.menu_responsive?this.el.css.responsive+" w-full":"p-0 m-0 h-0 w-0 "+this.el.css.responsive.replaceAll("p-","");return this.width>640?this.responsive=!1:this.responsive=!0,this.width>640?this.el.css.css+" "+this.el.css.container+" "+this.el.css.align:"fixed top-0 left-0 z-highest "+e},opacity(){return this.menu_responsive?"opacity-100 w-full":"opacity-0 w-0"}},methods:{background(e){if(!e||!this.menu_responsive)return"";if(e.hasOwnProperty("gallery")&&!e.gallery||!e.hasOwnProperty("gallery")){let s="";return e.image&&e.image.url&&(e.image&&e.image.url&&e.image.url.indexOf(".mp4")<0&&(s=" background-image:url("+this.$imageURL(e.image)+");")),s}},openSub(e,s){this.clientY=s.clientY+window.pageYOffset,this.submenu===e?this.submenu=null:this.submenu=e},isOver(e){return e<0?"opacity-0 invisible":this.submenu===e?"opacity-100 visible":"opacity-0 invisible"},overStyle(e,s){let t=document.querySelector(".item_"+s),n=this.clientY;return t&&(n=t.getBoundingClientRect().bottom),e<0?"height:0px;":this.submenu===e?"height:auto;position:fixed;top:"+n+"px;":"height:0px;"},getPos(e){if(this.submenu===e){let s=this.$refs["submenu_"+e][0].getBoundingClientRect().x,t=this.$refs["submenu_"+e][0].getBoundingClientRect().y,n=this.$refs["submenu_"+e][0].clientWidth,i=this.$refs["submenu_"+e][0].clientHeight,o=window.innerWidth,l=window.innerHeight;s+n-o>0&&(this.$refs["submenu_"+e][0].style.left=o-n+"px"),t+i-l>0&&(this.$refs["submenu_"+e][0].style.transform="translateY(-110%)")}}},mounted(){this.width=window.innerWidth,window.addEventListener("resize",(()=>{this.width=window.innerWidth})),window.addEventListener("scroll",(()=>{this.clientY=this.clientY+window.pageYOffset}));let e=document.querySelector(".menu_item");e&&(this.clientY=e.getBoundingClientRect().bottom)}},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("nav",{ref:e.el.id,staticClass:"cursor-pointer",class:e.menuContainerCSS,style:e.background(e.el),attrs:{navigation:"",id:e.el.id}},[e.responsive?n(t,{staticClass:"burger-icon md:hidden z-highest fixed top-0 m-1 text-3xl",class:(e.menu_responsive,e.el.css.items),attrs:{name:e.menu_responsive?e.el.icons.back:e.el.icons.burger},on:{click:function(s){e.menu_responsive=!e.menu_responsive}}}):e._e(),n("div",{staticClass:"hidden md:contents relative"},[e._l(e.el.blocks,(function(s,t){return[s.link&&!s.blocks.length?n("a",{class:s.css,attrs:{href:"in_editor_preview"!=e.$mapState().editor.action?s.link:"#"}},[e._v(" "+e._s(s.content)+" ")]):e._e(),s.link||s.blocks.length?e._e():n("div",{staticClass:"relative flex flex-row items-center",class:s.css,attrs:{"menu-item":""}},[e._v(" "+e._s(s.content)+" ")]),!s.link&&s.blocks.length?n("div",{staticClass:"relative flex flex-row items-center",class:s.css+" menu_item item_"+s.id,on:{click:function(s){return e.openSub(t,s)}}},[e._v(" "+e._s(s.content)+" "),e.el.hasOwnProperty("icons")?n("i",{staticClass:"material-icons"},[e._v(e._s(e.el.icons.submenu))]):n("i",{staticClass:"material-icons"},[e._v("expand_more")])]):e._e(),!s.link&&s.blocks&&s.blocks.length?n("div",{ref:"submenu_"+t,refInFor:!0,class:e.isOver(t)+" "+e.el.css.submenu+" top-0 fixed flex flex-col z-highest",style:e.overStyle(t,s.id),attrs:{submenu:""},on:{click:function(s){e.submenu=null}}},[s.blocks[0].blocks&&e.submenu===t?n("div",{style:e.getPos(t)},[e._l(s.blocks,(function(s){return[!s||s.hasOwnProperty("blocks")||s.hasOwnProperty("blocks")?e._e():n("block-preview-element",{key:s.id,attrs:{el:s,data:e.$attrs.data||null,currency:e.$attrs.currency||null,develop:!1}}),s.hasOwnProperty("blocks")?n("block-preview-single-container",{key:s.id,attrs:{doc:s,level:"1"}}):e._e()]}))],2):n("div",{staticClass:"flex flex-col"},[e._l(s.blocks,(function(t){return[n("a",{class:s.css,attrs:{href:t.link}},[n("span",[e._v(e._s(t.content))])])]}))],2)]):e._e()]}))],2),e._l(e.el.blocks,(function(s,t){return e.responsive?[e.responsive?n("div",{staticClass:"md:hidden w-0",class:e.opacity},[s.link?n("a",{attrs:{href:"in_editor_preview"!=e.$mapState().editor.action?s.link:"#"}},[n("div",{class:e.el.css.responsive_items},[e._v(e._s(s.content))])]):e._e(),s.link||s.blocks.length?e._e():n("div",{class:e.el.css.responsive_items},[e._v(e._s(s.content))]),!s.link&&s.hasOwnProperty("blocks")&&s.blocks.length?n("div",{class:e.el.css.responsive_items,on:{click:function(s){e.submenu&&e.submenu===t?e.submenu=null:e.submenu=t}}},[e._v(" "+e._s(s.content)+" ")]):e._e()]):e._e(),e.submenu===t&&s.blocks&&s.blocks.length?n("div",{ref:"submenu_"+t,refInFor:!0,class:e.el.css.submenu+" absolute flex top-0 flex-col z-highest",attrs:{"submenu-responsive":""},on:{click:function(s){e.el.css.submenu_behavior,e.submenu=null}}},[s.blocks[0].blocks&&e.submenu===t?n("div",{style:e.getPos(t),on:{mouseleave:function(s){e.el.css.submenu_behavior,e.submenu=null}}},[e._l(s.blocks,(function(s){return[!s||s.hasOwnProperty("blocks")||s.hasOwnProperty("blocks")?e._e():n("block-preview-element",{key:s.id,attrs:{el:s,data:e.$attrs.data||null,currency:e.$attrs.currency||null,develop:!1}}),s.hasOwnProperty("blocks")?n("block-preview-single-container",{key:s.id,attrs:{doc:s,level:"1"}}):e._e()]}))],2):n("div",{staticClass:"flex flex-col"},[e._l(s.blocks,(function(t){return[n("a",{class:s.css,attrs:{href:t.link}},[n("span",[e._v(e._s(t.content))])])]}))],2)]):e._e()]:e._e()}))],2)}),[],!1,(function(e){for(let s in u)this[s]=u[s]}),null,null,null);m.options.__file="src/components/blocks/elements/moka.menu.vue";var d=m.exports;export default d;
