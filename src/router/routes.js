export const routes = [
  { path: '/', component: () => import('../views/Home'), meta: { title: 'Welcome to Pool Math' } },
  { path: '/howto', component: () => import('../views/HowTo'), meta: { title: 'How to Use This Website' } },
  { path: '/s1Intro', component: () => import('../views/section1/Intro'), meta: { title: 'Into to Section 1' } },
  { path: '/s1p1', component: () => import('../views/section1/P1'), meta: { title: 'Section 1 Problem 1' } },
  { path: '/s1p2', component: () => import('../views/section1/P2'), meta: { title: 'Section 1 Problem 2' } },
  { path: '/s1p3', component: () => import('../views/section1/P3'), meta: { title: 'Section 1 Problem 3' } },
  { path: '/s1p4', component: () => import('../views/section1/P4'), meta: { title: 'Section 1 Problem 4' } },
  { path: '/s1p5', component: () => import('../views/section1/P5'), meta: { title: 'Section 1 Problem 5' } },
  { path: '/s2Intro', component: () => import('../views/section2/Intro'), meta: { title: 'Intro to Section 2' } },
  { path: '/s2p1', component: () => import('../views/section2/P1'), meta: { title: 'Section 2 Problem 1' } },
  { path: '/s2p2', component: () => import('../views/section2/P2'), meta: { title: 'Section 2 Problem 2' } },
  { path: '/s2p3', component: () => import('../views/section2/P3'), meta: { title: 'Section 2 Problem 3' } },
  { path: '/s2p4', component: () => import('../views/section2/P4'), meta: { title: 'Section 2 Problem 4' } },
  { path: '/s2p5', component: () => import('../views/section2/P5'), meta: { title: 'Section 2 Problem 5' } },
  { path: '/s2p6', component: () => import('../views/section2/P6'), meta: { title: 'Section 2 Problem 6' } },
  { path: '/s2p7', component: () => import('../views/section2/P7'), meta: { title: 'Section 2 Problem 7' } },
  { path: '/s2p8', component: () => import('../views/section2/P8'), meta: { title: 'Section 2 Problem 8' } },
  { path: '/s3Intro', component: () => import('../views/section3/Intro'), meta: { title: 'Intro to Section 3' } },
  { path: '/s3p1', component: () => import('../views/section3/P1'), meta: { title: 'Section 3 Problem 1' } },
  { path: '/s3p2', component: () => import('../views/section3/P2'), meta: { title: 'Section 3 Problem 2' } },
  { path: '/s4Intro', component: () => import('../views/section4/Intro'), meta: { title: 'Intro to Section 4' } },
  { path: '/s4p1', component: () => import('../views/section4/P1'), meta: { title: 'Section 4 Problem 1' } }
]
