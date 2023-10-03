import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import APost from '../views/APost.vue'
import WeatherViews from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component:PostView
    },
    {
      path: '/post/:id',
      name: 'apost',
      component:APost
    },
    {
      path: '/weather',
      name: 'weather',
      component:WeatherViews
    }
  ]
})

export default router
