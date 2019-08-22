import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/singlebook',
      name: 'singlebook',
      component: () => import(/* webpackChunkName: "singlebook" */ './views/singlebook.vue')
    },
    {
      path: '/allbooks',
      name: 'allbooks',
      component: () => import(/* webpackChunkName: "allbooks" */ './views/allbooks.vue')
    }
  ]
})
