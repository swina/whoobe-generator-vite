<template>
  <div id="app">
    <block-preview :doc="page.component.json"/>
  </div>
</template>

<script>
import Page from '../config.js'
export default {
  name: 'Whoobe',
  metaInfo: {
    title: Page.component.seo.title ,
    titleTemplate: '%s | Whoobe Landing Page',
    meta : [
      { vmid: 'description', name: 'description' , content: Page.component.seo.description }
    ]
  },
  components: {
    'block-preview' : () => import ( './components/blocks/block.preview.vue' )
  },
  computed:{
    page(){
      return Page
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>