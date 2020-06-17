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
    component: () => import('../views/aboutTpl')
  },
  {
    path: '/services',
    name: 'servicesPage',
    component: () => import('../views/servicesTpl')
  },
  {
    path: '/services/item/',
    name: 'servicesItemPage',
    component: () => import('../views/servicesItemPageTpl')
  },
  {
    path: '/news',
    name: 'newsPage',
    component: () => import('../views/newsTpl')
  },
  {
    path: '/news/:slug',
    name: 'newsItemPage',
    component: () => import('../views/newsItemPageTpl')
  },
  {
    path: '/contacts',
    name: 'contactsPage',
    component: () => import('../views/contactsTpl')
  },
  {
    path: '/policy',
    name: 'policyPage',
    component: () => import('../views/policyTpl')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
