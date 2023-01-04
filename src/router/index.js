import { getPictures } from '@/DL/s3DL'
import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '../components/mainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainPage,
    beforeEnter: async () => {
        const pictures = await getPictures();
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
