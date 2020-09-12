import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      component: () => import('../views/Home')
    },
    {
      path:'/prim',
      component: () => import('../views/prim/prim')
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
      path: 'about',
      component: () => import('../views/about/about')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
