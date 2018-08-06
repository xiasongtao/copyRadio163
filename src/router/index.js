import Vue from 'vue'
import Router from 'vue-router'
import indexye from '@/components/indexye'
import xuangeye from '@/components/xuangeye'
import diantaiye from '@/components/diantaiye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/indexye',
      name: 'indexye',
      component: indexye
    },
    {
      path: '/xuangeye',
      name: 'xuangeye',
      component: xuangeye
    },
    {
      path: '/diantaiye',
      name: 'diantaiye',
      component: diantaiye
    },
    {
      path: '*',
      redirect: '/indexye'
    },
  ]
})
