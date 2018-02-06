import Home from './components/home/Home.vue'
import HowTo from './components/section0/HowTo.vue'
import S1P0 from './components/section1/P0.vue'
import S1P1 from './components/section1/P1.vue'
import S1P2 from './components/section1/P2.vue'
import S1P3 from './components/section1/P3.vue'
import S1P4 from './components/section1/P4.vue'
import S1P5 from './components/section1/P5.vue'
import S2P1 from './components/section2/P1.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/howto', component: HowTo },
  { path: '/s1p0', component: S1P0 },
  { path: '/s1p1', component: S1P1 },
  { path: '/s1p2', component: S1P2 },
  { path: '/s1p3', component: S1P3 },
  { path: '/s1p4', component: S1P4 },
  { path: '/s1p5', component: S1P5 },
  { path: '/s2p1', component: S2P1 }
]