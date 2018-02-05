import Home from './components/home/Home.vue'
import HowTo from './components/section0/HowTo.vue'
import S1P0 from './components/section1/P0.vue'
import S1P1 from './components/section1/P1.vue'
import S1P2 from './components/section1/P2.vue'
import S2P1 from './components/section2/P1.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/howto', component: HowTo },
  { path: '/s1p0', component: S1P0 },
  { path: '/s1p1', component: S1P1 },
  { path: '/s1p2', component: S1P2 },
  { path: '/s2p1', component: S2P1 }
]