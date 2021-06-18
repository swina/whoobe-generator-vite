<template>
  <div id="app">
    <block-preview :doc="page.component.json"/>
    <transition name="fade">
        <div style="transform: translateX(-50%);left:50%;" class="border-l-4 border-blue-500 fixed bottom-0 m-auto shadow-xl mb-12 bg-white text-gray-800 text-base p-4 w-1/2  z-highest" v-if="message">   
        {{ message }}
        </div>
    </transition>
  </div>
</template>

<script>
import Page from '../config.json'
export default {
  name: 'Whoobe',
  data:()=>({
    message: '',
  }),
  metaInfo: {
    title: Page.component.hasOwnProperty('seo') && Page.component.seo.title ? Page.component.seo.title : 'Whoobe Landing Page',
    titleTemplate: '%s | Whoobe Landing Page',
    meta : [
      { vmid: 'description', name: 'description' , content: Page.component.hasOwnProperty('seo') && Page.component.seo.description ? Page.component.seo.description : 'Whoobe Landing Pages visual builder' }
    ]
  },
  components: {
    'block-preview' : () => import ( './components/blocks/block.preview.vue' )
  },
  watch:{
     //when a new message diplay 
    '$store.state.whoobe.message':function(msg){
      this.setMessage ( msg )
    },
    message(v){
        //display message, if null or empty close 
        if ( v ){
            window.setTimeout(()=>{ 
              this.message = ''
              this.$store.dispatch('message','') 
            }, 4000)
        }
    },
  },
  computed:{
    page(){
      return Page
    }
  },
  methods: {
    setMessage(msg){
      this.message = msg
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>