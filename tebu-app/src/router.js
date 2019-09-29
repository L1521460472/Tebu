import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/category',
      name:'category',
      component: () => import('./views/Category.vue')
    },
    {
      path:'/user',
      name:'user',
      component: () => import('./views/User.vue')
    },
    {
      path:'/search',
      name:'search',
      component:() => import('./views/Search.vue')
    },
    {
      path:'/list',
      name:'list',
      component:() =>import('./views/List.vue')
    },
    {
      path:'/detail',
      name:'detail',
      component: () => import('./views/detail.vue')
    },
    {
      path: '/cart',
      name: 'shopcart',
      component: () => import('./views/shopcart.vue')
    },
    {
      path:'/product',
      name:'buy',
      component:() => import('./views/buy.vue')
    },
    {
      path:'/vlogin',
      name:'vlogin',
      component: () => import(/* webpackChunkName: "about" */ './views/Vlogin.vue')
    },
    {
      path:'/plogin',
      name:'plogin',
      component: () => import(/* webpackChunkName: "about" */ './views/Plogin.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
