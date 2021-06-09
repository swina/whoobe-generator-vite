import Vue from 'vue';
import App from './App.vue';
import './index.css'
import Utils from './scripts/utils.js'
Vue.use(Utils)
import Animation from './scripts/gsap.js'
Vue.use(Animation)
import Whoobe from './scripts/whoobe.js'
Vue.use(Whoobe)
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

new Vue({
  render: (h) => h(App),
}).$mount('#app');
