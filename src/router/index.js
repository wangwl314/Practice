import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home'

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect: '/home'
    },
    {
      path:'/home',
      component: home
    },
    {
      path:'/tech',
      component: () => import('@/views/tech/tech')
    },
    {
      path:'/other',
      component: () => import('@/views/other/other')
    },
    {
      path: '/login',
      component: () => import('@/views/login/login')
    },
    {
      path:'/details',
      component: () => import('@/views/details/details')
    },
    {
      path:'/creation',
      name:'creation',
      component: () => import('@/views/creation/creation')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
