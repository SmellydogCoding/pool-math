const Home = () => import('../views/Home.vue');
const HowTo = () => import('../views/HowTo.vue');
const S1Intro = () => import('../views/section1/Intro.vue')
const S1P1 = () => import('../views/section1/P1.vue')
const S1P2 = () => import('../views/section1/P2.vue')
const S1P3 = () => import('../views/section1/P3.vue')
const S1P4 = () => import('../views/section1/P4.vue')
const S1P5 = () => import('../views/section1/P5.vue')
const S2Intro = () => import('../views/section2/Intro.vue')
const S2P1 = () => import('../views/section2/P1.vue')
const S2P2 = () => import('../views/section2/P2.vue')
const S2P3 = () => import('../views/section2/P3.vue')
const S2P4 = () => import('../views/section2/P4.vue')
const S2P5 = () => import('../views/section2/P5.vue')
const S2P6 = () => import('../views/section2/P6.vue')
const S2P7 = () => import('../views/section2/P7.vue')
const S2P8 = () => import('../views/section2/P8.vue')
const S3Intro = () => import('../views/section3/Intro.vue')
const S3P1 = () => import('../views/section3/P1.vue')

export const routes = [
  { path: '/', component: Home, meta: { title: 'Welcome to Pool Math' } },
  { path: '/howto', component: HowTo, meta: { title: 'How to Use This Website' }  },
  { path: '/s1Intro', component: S1Intro, meta: { title: 'Into to Section 1' }  },
  { path: '/s1p1', component: S1P1, meta: { title: 'Section 1 Problem 1' }  },
  { path: '/s1p2', component: S1P2, meta: { title: 'Section 1 Problem 2' }  },
  { path: '/s1p3', component: S1P3, meta: { title: 'Section 1 Problem 3' }  },
  { path: '/s1p4', component: S1P4, meta: { title: 'Section 1 Problem 4' }  },
  { path: '/s1p5', component: S1P5, meta: { title: 'Section 1 Problem 5' }  },
  { path: '/s2Intro', component: S2Intro, meta: { title: 'Intro to Section 2' }  },
  { path: '/s2p1', component: S2P1, meta: { title: 'Section 2 Problem 1' }  },
  { path: '/s2p2', component: S2P2, meta: { title: 'Section 2 Problem 2' }  },
  { path: '/s2p3', component: S2P3, meta: { title: 'Section 2 Problem 3' }  },
  { path: '/s2p4', component: S2P4, meta: { title: 'Section 2 Problem 4' }  },
  { path: '/s2p5', component: S2P5, meta: { title: 'Section 2 Problem 5' }  },
  { path: '/s2p6', component: S2P6, meta: { title: 'Section 2 Problem 6' }  },
  { path: '/s2p7', component: S2P7, meta: { title: 'Section 2 Problem 7' }  },
  { path: '/s2p8', component: S2P8, meta: { title: 'Section 2 Problem 8' }  },
  { path: '/s3Intro', component: S3Intro, meta: { title: 'Intro to Section 3' }  },
  { path: '/s3p1', component: S3P1, meta: { title: 'Section 3 Problem 1' }  },
]