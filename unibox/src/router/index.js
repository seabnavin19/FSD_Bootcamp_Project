import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import UniInfo from '../pages/UniInfo.vue'
import ComputerScience from '../pages/ComputerScience.vue'
import InternalRelation from '../pages/InternalRelation'
import Architecture from '../pages/Architecture'
import About from '../pages/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uniInfo',
    name: 'Uniinfo',
    component: UniInfo
  },
  {
    path: '/Computer Science',
    name: 'ComputerScience',
    component: ComputerScience
  },
  {
    path: '/Internal Relation',
    name: 'Internal Relation',
    component: InternalRelation
  },
  {
    path: '/Architecture',
    name: 'Architecture',
    component: Architecture
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
