import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import PUC from '../pages/Inter_Relation/PUC.vue'
import RUPP from '../pages/Inter_Relation/RUPP.vue'
import PIU from '../pages/Architecture/PIU'
import AUPP from '../pages/Architecture/AUPP'
import PUC_ARC from '../pages/Architecture/PUC'
import NU_ARC from '../pages/Architecture/NU'
import PIU_Com from '../pages/Computer/PIU'
import NITTICT_Com from '../pages/Computer/NITTICT'
import RUPP_Com from '../pages/Computer/RUPP'
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
    path: '/computer science/rupp',
    name: 'RUPP',
    component: RUPP_Com
  },
  {
    path: '/computer science/nittict',
    name: 'NITTICT',
    component: NITTICT_Com
  },
  {
    path: '/computer science/piu',
    name: 'PIU',
    component: PIU_Com
  },
  {
    path: '/architecture/nu',
    name: 'NU',
    component: NU_ARC
  },
  {
    path: '/architecture/puc',
    name: 'PUC',
    component: PUC_ARC
  },
  {
    path: '/architecture/aupp',
    name: 'AUPP',
    component: AUPP
  },
  {
    path: '/architecture/piu',
    name: 'PIU',
    component: PIU
  },
  {
    path: '/interal relation/rupp',
    name: 'RUPP',
    component: RUPP
  },
  {
    path: '/interal relation/puc',
    name: 'PUC',
    component: PUC
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
