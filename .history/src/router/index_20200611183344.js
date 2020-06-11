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

      // 首页
      {
        path: '',
        name: 'Home',
        component: Home
      },

      // 退出系统页
      {
        path: '/sign-out',
        name: 'Sign-out',
        component: () => import('../views/Sign-out')
      },

      // 分页表格
      {
        path: '/paging',
        name: 'Paging',
        component: () => import('../views/Paging')
      },

      // 已发布页
      {
        path: '/publish',
        name: 'Publish',
        component: () => import('../views/Publish')
      },

      // 统计页
      {
        path: '/census',
        name: 'Census',
        component: () => import('../views/Census')
      },

      // 标签页
      {
        path: '/label',
        name: 'Label',
        component: () => import('../views/Label')
      },

      // 发表文章页
      {
        path: '/writing',
        name: 'Writing',
        component: () => import('../views/Writing')
      },

      // 导出Excel页
      {
        path: '/excel',
        name: 'Excel',
        component: () => import('../views/Excel')
      },

      // 上传图片页
      {
        path: '/upimg',
        name: 'Upimg',
        component: () => import('../views/Upimg')
      },
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

let whitePath = ['/sign-in','/sign-up']
router.beforeEach((to, from, next) => {
 let user = localStorage.getItem('user')
 if(whitePath.includes(to.path)){
   next()
 }else{
  user? next():next('/sign-in')
 }
 
})
export default router
