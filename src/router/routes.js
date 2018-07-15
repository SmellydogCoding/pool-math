export const routes = [
  { path: '/', component: () => import('../views/Home'), meta: { title: 'Welcome to Pool Math' } },
  { path: '/how-to-use-this-website', component: () => import('../views/HowTo'), meta: { title: 'How to Use This Website' } },
  { path: '/intro-to-section-1', component: () => import('../views/section1/Intro'), meta: { title: 'Into to Conversions' } },
  { path: '/converting-ounces-to-pounds', component: () => import('../views/section1/P1'), meta: { title: 'Converting Ounces to Pounds' } },
  { path: '/converting-fluid-ounces-to-gallons', component: () => import('../views/section1/P2'), meta: { title: 'Converting Fluid Ounces to Gallons' } },
  { path: '/converting-fluid-ounces-to-cups', component: () => import('../views/section1/P3'), meta: { title: 'Converting Fluid Ounces to Cups' } },
  { path: '/converting-yards-to-feet', component: () => import('../views/section1/P4'), meta: { title: 'Converting Yards to Feet' } },
  { path: '/converting-inches-to-feet', component: () => import('../views/section1/P5'), meta: { title: 'Converting Inches to Feet' } },
  { path: '/intro-to-section-2', component: () => import('../views/section2/Intro'), meta: { title: 'Intro to Area and Volume' } },
  { path: '/area-of-a-swimming-pool', component: () => import('../views/section2/P1'), meta: { title: 'Area of a Swimming Pool' } },
  { path: '/area-of-a-hot-tub', component: () => import('../views/section2/P2'), meta: { title: 'Area of a Hot Tub' } },
  { path: '/volume-of-water-in-a-swimming-pool', component: () => import('../views/section2/P3'), meta: { title: 'Volume of Water in a Swimming Pool' } },
  { path: '/volume-of-water-in-a-multi-depth-pool', component: () => import('../views/section2/P4'), meta: { title: 'Volume of Water in a Multi-Depth Pool' } },
  { path: '/volume-of-water-in-a-hot-tub', component: () => import('../views/section2/P5'), meta: { title: 'Volume of Water in a Hot Tub' } },
  { path: '/volume-of-water-in-a-hot-tub-with-seats', component: () => import('../views/section2/P6'), meta: { title: 'Volume of Water in a Hot Tub With Seats' } },
  { path: '/volume-of-water-loss-in-a-swimming-pool', component: () => import('../views/section2/P7'), meta: { title: 'Volume of Water Loss in a Swimming Pool' } },
  { path: '/volume-of-water-loss-in-a-hot-tub', component: () => import('../views/section2/P8'), meta: { title: 'Volume of Water Loss in a Hot Tub' } },
  { path: '/intro-to-section-3', component: () => import('../views/section3/Intro'), meta: { title: 'Intro to Water Balance' } },
  { path: '/calculating-saturation-index', component: () => import('../views/section3/P1'), meta: { title: 'Calculating Saturation Index' } },
  { path: '/calculating-saturation-index-with-cyanuric-acid', component: () => import('../views/section3/P2'), meta: { title: 'Calculating Saturation Index - With Cyanuric Acid' } },
  { path: '/intro-to-section-4', component: () => import('../views/section4/Intro'), meta: { title: 'Intro to Chemical Adjustments' } },
  { path: '/adding-an-algaecide', component: () => import('../views/section4/P1'), meta: { title: 'Adding an Algaecide' } },
  { path: '/chemical-adjustment-with-a-label', component: () => import('../views/section4/P2'), meta: { title: 'Chemical Adjustment With a Label' } },
  { path: '/chemical-adjustment-without-a-label-raise-chlorine', component: () => import('../views/section4/P3'), meta: { title: 'Chemcial Adjustment Without a Label - Raise Chlorine' } },
  { path: '/chemical-adjustment-without-a-label-raise-alkalinity', component: () => import('../views/section4/P4'), meta: { title: 'Chemcial Adjustment Without a Label - Raise Alkalinity' } },
  { path: '/chemical-adjustment-without-a-label-lower-alkalinity', component: () => import('../views/section4/P5'), meta: { title: 'Chemcial Adjustment Without a Label - Lower Alkalinity' } },
  { path: '/chemical-adjustment-without-a-label-raise-calcium', component: () => import('../views/section4/P6'), meta: { title: 'Chemcial Adjustment Without a Label - Raise Calcium' } },
  { path: '/chemical-adjustment-without-a-label-raise-cyanuric-acid', component: () => import('../views/section4/P7'), meta: { title: 'Chemcial Adjustment Without a Label - Raise Cyanuric Acid' } },
  { path: '/chemical-adjustment-without-a-label-lower-chlorine', component: () => import('../views/section4/P8'), meta: { title: 'Chemcial Adjustment Without a Label - Lower Chlorine' } },
  { path: '/intro-to-section-5', component: () => import('../views/section5/Intro'), meta: { title: 'Intro to Breakpoint Chlorination' } },
  { path: '/calculate-breakpoint', component: () => import('../views/section5/P1'), meta: { title: 'Calculate Breakpoint' } },
  { path: '/breakpoint-chemical-adjustment', component: () => import('../views/section5/P2'), meta: { title: 'Breakpoint Chemical Adjustment' } },
  { path: '/intro-to-section-6', component: () => import('../views/section6/Intro'), meta: { title: 'Intro to Flow Rate and Turnover Rate' } },
  { path: '/turnover-rate-of-a-pool', component: () => import('../views/section6/P1'), meta: { title: 'Turnover Rate of a Pool' } },
  { path: '/turnover-rate-of-a-hot-tub', component: () => import('../views/section6/P2'), meta: { title: 'Turnover Rate of a Hot Tub' } },
  { path: '/flow-rate-of-a-pool', component: () => import('../views/section6/P3'), meta: { title: 'Flow Rate of a Pool' } },
  { path: '/flow-rate-of-a-hot-tub', component: () => import('../views/section6/P4'), meta: { title: 'Flow Rate of a Hot Tub' } },
  { path: '/intro-to-section-7', component: () => import('../views/section7/Intro'), meta: { title: 'Intro to Flow Rate and Turnover Rate' } },
  { path: '/diatomaceous-earth-calculate-filter-size', component: () => import('../views/section7/P1'), meta: { title: 'Diatomaceous Earth - Calculate Filter Size' } },
  { path: '/diatomaceous-earth-filter-size-required', component: () => import('../views/section7/P2'), meta: { title: 'Diatomaceous Earth - Filter Size Required' } },
  { path: '/diatomaceous-earth-max-flow-provided', component: () => import('../views/section7/P3'), meta: { title: 'Diatomaceous Earth - Max Flow Provided' } },
  { path: '/sand-filter-calculate-filter-size', component: () => import('../views/section7/P4'), meta: { title: 'Sand Filter - Calculate Filter Size' } },
  { path: '/sand-filter-size-required', component: () => import('../views/section7/P5'), meta: { title: 'Sand Filter - Filter Size Required' } },
  { path: '/sand-filter-max-flow-provided', component: () => import('../views/section7/P6'), meta: { title: 'Sand Filter - Max Flow Provided' } },
  { path: '/cartridge-filter-size-required', component: () => import('../views/section7/P7'), meta: { title: 'Cartridge Filter - Filter Size Required' } },
  { path: '/cartridge-filter-max-flow-provided', component: () => import('../views/section7/P8'), meta: { title: 'Cartridge Filter - Max Flow Provided' } },
  { path: '/pool-math', redirect: '/' },
  { path: '*', component: () => import('../views/404'), meta: { title: '404 - Page Not Found' } }
]
