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
    component: () => import(/* webpackChunkName: "about" */ '../views/aboutTpl')
  },
  {
    path: '/services',
    name: 'servicesPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/servicesTpl')
  },
  {
    path: '/services/:slug',
    name: 'servicesItemPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/servicesItemPageTpl')
  },
  {
    path: '/news',
    name: 'newsPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/newsTpl')
  },
  {
    path: '/contacts',
    name: 'contactsPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/contactsTpl')
  },
  {
    path: '/policy',
    name: 'policyPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/policyTpl')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
