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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/login.vue')
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "help" */ './views/help.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import(/* webpackChunkName: "game" */ './views/game.vue')
    },
    {
      path: '/he',
      name: 'he',
      component: () => import(/* webpackChunkName: "he" */ './views/he.vue')
    }, {
      path: '/Prize',
      name: 'Prize',
      component: () => import(/* webpackChunkName: "Prize" */ './views/Prize.vue')
    }
  ]
})
