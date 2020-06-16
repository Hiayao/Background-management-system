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
        component: Home,
        meta:{
          title:'首页'
        }
      },

      // 退出系统页
      {
        path: '/sign-out',
        name: 'Sign-out',
        component: () => import('../views/Sign-out'),
        meta:{
          title:'退出系统'
        }
      },

      // 分页表格
      {
        path: '/paging',
        name: 'Paging',
        component: () => import('../views/Paging'),
        meta:{
          title:'分页表格'
        }
      },

      // 已发布页
      {
        path: '/publish',
        name: 'Publish',
        component: () => import('../views/Publish'),
        meta:{
          title:'已发布'
        }
      },

      // 统计页
      {
        path: '/census',
        name: 'Census',
        component: () => import('../views/Census'),
        meta:{
          title:'统计'
        }
      },

      // 标签页
      {
        path: '/label',
        name: 'Label',
        component: () => import('../views/Label'),
        meta:{
          title:'标签'
        }
      },

      // 发表文章页
      {
        path: '/writing',
        name: 'Writing',
        component: () => import('../views/Writing'),
        meta:{
          title:'发表文章'
        }
      },

      // 导出Excel页
      {
        path: '/excel',
        name: 'Excel',
        component: () => import('../views/Excel'),
        meta:{
          title:'导出Excel'
        }
      },

      // 上传图片页
      {
        path: '/upimg',
        name: 'Upimg',
        component: () => import('../views/Upimg'),
        meta:{
          title:'上传图片'
        }
      },
      // 编辑文章页
      {
        path: '/edit',
        name: 'Edit',
        component: () => import('../views/Edit'),
        meta:{
          title:'编辑文章'
        }
      },
       // 查看文章页
       {
        path: '/seetxt',
        name: 'Seetxt',
        component: () => import('../views/Seetxt'),
        meta:{
          title:'查看文章'
        }
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

// 避免冗余路由
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

let whitePath = ['/sign-in','/sign-up']
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
 let user = localStorage.getItem('user')
 if(whitePath.includes(to.path)){
   next()
 }else{
  user? next():next('/sign-in')
 }
 
})
export default router
