import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      component: () => import('../views/Home')
    },
    {
      path:'/home',
      component: () => import('../views/Home')
    },
    {
      path:'/tech',
      component: () => import('../views/tech/tech')
    },
    {
      path:'/other',
      component: () => import('../views/other/other')
    },
    {
      path: '/about',
      component: () => import('../views/about/about')
    },
    {
      path: '/login',
      component: () => import('../views/login/login')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
