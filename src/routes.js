import Home from './components/home/Home.vue'
import HowTo from './components/section0/HowTo.vue'
import P1 from './components/section2/P1.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/howto', component: HowTo },
  { path: '/s2p1', component: P1 }
]