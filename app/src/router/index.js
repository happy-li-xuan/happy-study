import Vue from 'vue'
import VueRouter from 'vue-router'
import profitable from '../components/profitable.vue'
const change = () => import("../navbar/change.vue")
const shouye = () => import("../shouye/shouye.vue")
const system = () => import("../navbar/system.vue")
const music = () => import("../navbar/music.vue")
const select = () => import("../navbar/select.vue")
const comparison = () => import("../navbar/comparison.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shouye',
    component: shouye
  },
  {
    path: '/profitable',
    name: 'profitable',
    component: profitable
  },
  {
    path:'/profitable/change',
    component:change
  },
  {
    path:'/profitable/system',
    component:system
  },
  {
    path:'/profitable/music',
    component:music
  },
  {
    path:'/profitable/select',
    component:select
  },
  {
    path:'/profitable/comparison',
    component:comparison
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
