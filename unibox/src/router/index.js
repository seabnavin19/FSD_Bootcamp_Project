import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../pages/Home.vue'
// import PUC from '../pages/Inter_Relation/PUC'
// import RUPP from '../pages/Inter_Relation/RUPP.vue'
// import PIU from '../pages/Architecture/PIU'
// import AUPP from '../pages/Architecture/AUPP'
// import PUC_ARC from '../pages/Architecture/PUC'
// import NU_ARC from '../pages/Architecture/NU'
// import PIU_Com from '../pages/Computer/PIU'
// import NIPTICT_Com from '../pages/Computer/NIPTICT'
// import RUPP_Com from '../pages/Computer/RUPP'
// import ComputerScience from '../pages/ComputerScience.vue'
// import InternalRelation from '../pages/InternalRelation'
// import Architecture from '../pages/Architecture'
// import About from '../pages/About.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../pages/Home")
  },
  {
    path: '/Computer Science/Royal University of Phnom Penh(RUPP)',
    name: 'RUPP_CS',
    component: () => import("../pages/Computer/RUPP_CS")
  },
  {
    path: '/Computer Science/National Institute of Posts, Telecommunications and ICT(NIPTICT)',  
    name: 'NIPTICT_CS',
    component: () => import("../pages/Computer/NIPTICT_CS")
  },
  {
    path: '/Computer Science/Paragon International University',
    name: 'PIU_CS',
    component: () => import("../pages/Computer/PIU_CS")
  },
  {
    path: '/Architecture/Norton University (NU)',
    name: 'NU_ARC',
    component: () => import("../pages/Architecture/NU_ARC")
  },
  {
    path: '/Architecture/Pannasastra University of Cambodia (PUC)',
    name: 'PUC_ARC',
    component: () => import("../pages/Architecture/PUC_ARC")
  },
  {
    path: '/Architecture/American University of Phnom Penh (AUPP)',
    name: 'AUPP_ARC',
    component: () => import("../pages/Architecture/AUPP_ARC")
  },
  {
    path: '/Architecture/Paragon International University',
    name: 'PIU_ARC',
    component: () => import("../pages/Architecture/PIU_ARC")
  },
  {
    path: '/International Relation/Royal University of Phnom Penh(RUPP)',
    name: 'RUPP_IR',
    component: () => import("../pages/Inter_Relation/RUPP_IR")
  },
  {
    path: '/International Relation/Pannasastra University of Cambodia%20(PUC)',
    name: 'PUC_IR',
    component: () => import("../pages/Inter_Relation/PUC_IR")
  },
  {
    path: '/Computer Science',
    name: 'ComputerScience',
    component: () => import("../pages/ComputerScience")
  },
  {
    path: '/International Relation',
    name: 'International Relation',
    component: () => import("../pages/InternalRelation")
  },
  {
    path: '/Architecture',
    name: 'Architecture',
    component: () => import("../pages/Architecture")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../pages/About")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
