import Vue from 'vue'
import VueRouter from 'vue-router'
import Preview from '../components/blocks/block.preview.vue'
import Product from '../components/plugins/store/whoobe/product.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home' , component: Preview },
  { path: '/shop/:id', name: 'Product' , component: Product },
  // { path: '/:path(.*)', component: Preview },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router
