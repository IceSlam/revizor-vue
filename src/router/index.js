import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homeTpl'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/about',
    name: 'aboutPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/aboutTpl')
  },
  {
    path: '/services',
    name: 'servicesPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/servicesTpl')
  },
  {
    path: '/news',
    name: 'newsPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/newsTpl')
  },
  {
    path: '/contacts',
    name: 'contactsPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/contactsTpl')
  },
  {
    path: '/policy',
    name: 'policyPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/policyTpl')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
