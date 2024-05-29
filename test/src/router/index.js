import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Menu1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu1',
      component: HomeView
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: () => import('../views/Menu2.vue')
    },
    {
      path: '/menu3',
      name: 'menu3',
      component: () => import('../views/Menu3.vue')
    }
  ]
})

export default router
