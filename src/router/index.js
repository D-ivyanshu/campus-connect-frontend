import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Auth/LoginPage.vue'
import RegisterPage from '@/views/Auth/RegisterPage.vue'
import HomePage from '@/views/HomePage.vue'
import AddPost from '@/components/Posts/AddPost.vue'
import ShowPost from '@/components/Posts/ShowPost.vue'
import ProfilePage from '@/components/Profile/ProfilePage.vue'
import ProfileCard from '@/components/Profile/ProfileCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
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
    },
    {
      path: '/add',
      name: 'add-post',
      component: AddPost
    },
    {
      path: '/posts/:id',
      name: 'show-post',
      component: ShowPost
    },
    {
      path: '/profile',
      name: 'profile-page',
      component: ProfilePage,
      children: [
        {
          path: ':id',
          component: ProfileCard
        }
      ]
    }
  ]
})

export default router


//TODO: make a before route navigation before /profile route 