import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DprRiViewVue from '../views/DPR-RI/DprRiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dpr-ri',
      name: 'dpr-ri',
      component: DprRiViewVue
    }
  ]
})

export default router
