import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Contacts from '../views/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})

export default router
