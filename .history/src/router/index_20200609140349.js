import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    redirec:'/'
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
    path: '/',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
