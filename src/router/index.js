import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Auth/LoginPage.vue'
import RegisterPage from '@/views/Auth/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    }
  ]
})

export default router
