import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirec: '/'
  },
  {
    path: '/sign-in',
    name: 'Sign-in',
    component: () => import('../views/Sign-in')
  },
  {
    path: '/sign-up',
    name: 'Sign-up',
    component: () => import('../views/Sign-up')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/sign-out',
        name: 'Sign-out',
        component: () => import('../views/Sign-out')
      }
    ]
  },
  {
    path: '*',
    name: 'Err',
    component: () => import('../views/Err')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
 let user = localStorage.getItem('user')
 if(to.path === '/sign-in'){
   next()
 }else{
  user? next():next('/sign-in'),next('/sign-up')
 }
 
})
export default router
