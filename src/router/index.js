import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sell from '../views/Sell.vue'
import Search from '../views/Search.vue'
import Contact from '../views/Contact.vue'
import End from '../views/End.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/verkopen',
    name: 'Sell',
    component: Sell
  },
  {
    path: '/woning-zoeken',
    name: 'Search',
    component: Search
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/end',
    name: 'End',
    component: End
  }
]

const router = new VueRouter({
  routes
})

export default router
