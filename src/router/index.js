import { createRouter, createWebHistory } from 'vue-router'
import AICrossword from '../views/battles/AICrossword.vue'


const routes = [
  {
    path: '/',
    name: 'AICrossword',
    component: AICrossword,
    meta: {
      title: 'Siap bermain GUNDU?'
    }
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
