import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DashboardView from '@/components/DashboardView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView
    }
  ]
})
