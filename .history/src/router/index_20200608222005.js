import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'Sign-in',
    component: () => import( '../views/Sign-in')
  },
  {
    path: '/sign-up',
    name: 'Sign-up',
    component: () => import( '../views/Sign-up')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import( '../views/Layout/Layout')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
