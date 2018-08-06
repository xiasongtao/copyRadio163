// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import axios from 'axios'
import veuAxios from "vue-axios"
import zongstore from "./stores"
import VueAwesomeSwiper from 'vue-awesome-swiper' 
import 'swiper/dist/css/swiper.css' 
Vue.use(VueAwesomeSwiper)
Vue.use(veuAxios,axios)

Vue.config.productionTip = false

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store : new Vuex.Store(zongstore)
})
