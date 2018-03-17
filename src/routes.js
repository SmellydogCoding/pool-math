const Home = () => import('./components/home/Home.vue');
const HowTo = () => import('./components/section0/HowTo.vue');
const S1P0 = () => import('./components/section1/P0.vue')
const S1P1 = () => import('./components/section1/P1.vue')
const S1P2 = () => import('./components/section1/P2.vue')
const S1P3 = () => import('./components/section1/P3.vue')
const S1P4 = () => import('./components/section1/P4.vue')
const S1P5 = () => import('./components/section1/P5.vue')
const S2P0 = () => import('./components/section2/P0.vue')
const S2P1 = () => import('./components/section2/P1.vue')
const S2P2 = () => import('./components/section2/P2.vue')

export const routes = [
  { path: '/', component: Home },
  { path: '/howto', component: HowTo },
  { path: '/s1p0', component: S1P0 },
  { path: '/s1p1', component: S1P1 },
  { path: '/s1p2', component: S1P2 },
  { path: '/s1p3', component: S1P3 },
  { path: '/s1p4', component: S1P4 },
  { path: '/s1p5', component: S1P5 },
  { path: '/s2p0', component: S2P0 },
  { path: '/s2p1', component: S2P1 },
  { path: '/s2p2', component: S2P2 }
]