import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      path:'/cart',
      name:'cart',
      component: () => import('./views/Cart.vue')
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
