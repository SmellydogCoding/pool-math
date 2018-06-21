<template lang="pug">
  div
    v-toolbar-side-icon(@click="drawer = !drawer")
    v-navigation-drawer.pb-0(v-model="drawer" dark fixed temporary :width="width" :height="height")
      v-list.pa-1
        v-list-tile(avatar tag="div")
          v-list-tile-avatar
            img(:src="src" :alt="alt")
          v-list-tile-content
            v-list-tile-title {{ title }}
          v-list-tile-action
            v-btn(icon @click="drawer = !drawer")
              v-icon close
      v-list.pt-0(dense)
        v-divider(light)
        router-link.list-item--link-bottom-border.py-2(to="/how-to-use-this-website" tag="v-list-tile" active-class="active")
          v-list-tile-content
            v-list-tile-title.subheading.text-xs-center How to Use This Website
        v-expansion-panel
          v-expansion-panel-content(v-for="section in menu" :key="section.title")
            div(slot="header") {{ section.title }}
            router-link(:to="subsection.link" tag="v-list-tile" active-class="active" v-for="subsection in section.subsections" :key="subsection.link")
              v-list-tile-content
                v-list-tile-title {{ subsection.title }}
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      width: '350',
      height: '900',
      src: 'src/assets/buoy.jpg',
      alt: 'buoy',
      title: 'Pool Math Problems Menu',
      menu: [
        {
          title: 'Section 1 - Conversions',
          subsections: [
            {link: '/intro-to-section-1', title: '1.0 - About This Section'},
            {link: '/converting-ounces-to-pounds', title: '1.1 - Convert Ounces to Pounds'},
            {link: '/converting-fluid-ounces-to-gallons', title: '1.2 - Convert Fluid Ounces to Gallons'},
            {link: '/converting-fluid-ounces-to-cups', title: '1.3 - Convert Fluid Ounces to Cups'},
            {link: '/converting-yards-to-feet', title: '1.4 - Convert Yards to Feet'},
            {link: '/converting-inches-to-feet', title: '1.5 - Convert Inches to Feet'}
          ]
        },
        {
          title: 'Section 2 - Area and Volume',
          subsections: [
            {link: '/intro-to-section-2', title: '2.0 - About This Section'},
            {link: '/area-of-a-swimming-pool', title: '2.1 - Area of a Swimming Pool'},
            {link: '/area-of-a-hot-tub', title: '2.2 - Area of a Hot Tub'},
            {link: '/volume-of-water-in-a-swimming-pool', title: '2.3 - Volume of Water in a Swimming Pool'},
            {link: '/volume-of-water-in-a-multi-depth-pool', title: '2.4 - Volume of Water in a Multi-Depth Pool'},
            {link: '/volume-of-water-in-a-hot-tub', title: '2.5 - Volume of Water in a Hot Tub'},
            {link: '/volume-of-water-in-a-hot-tub-with-seats', title: '2.6 - Volume of Water in a Hot Tub With Seats'},
            {link: '/volume-of-water-loss-in-a-swimming-pool', title: '2.7 - Volume of Water Loss in a Swimming Pool'},
            {link: '/volume-of-water-loss-in-a-hot-tub', title: '2.8 - Volume of Water Loss in a Hot Tub'}
          ]
        },
        {
          title: 'Section 3 - Water Balance',
          subsections: [
            {link: '/intro-to-section-3', title: '3.0 - About This Section'},
            {link: '/calculating-saturation-index', title: '3.1 - Calculate Saturation Index'},
            {link: '/calculating-saturation-index-with-cyanuric-acid', title: '3.2 - Calculate Saturation Index - With CA'}
          ]
        },
        {
          title: 'Section 4 - Chemical Adjustments',
          subsections: [
            {link: '/intro-to-section-4', title: '4.0 - About This Section'},
            {link: '/adding-an-algaecide', title: '4.1 - Adding an algaecide'},
            {link: '/chemical-adjustment-with-a-label', title: '4.2 - Adjustment with a Label'},
            {link: '/chemical-adjustment-without-a-label-raise-chlorine', title: '4.3 - Adjustment Without a Label - Raise Chlorine'},
            {link: '/chemical-adjustment-without-a-label-raise-alkalinity', title: '4.4 - Adjustment Without a Label - Raise Alkalinity'},
            {link: '/chemical-adjustment-without-a-label-lower-alkalinity', title: '4.5 - Adjustment Without a Label - Lower Alkalinity'},
            {link: '/chemical-adjustment-without-a-label-raise-calcium', title: '4.6 - Adjustment Without a Label - Raise Calcium'},
            {link: '/chemical-adjustment-without-a-label-raise-cyanuric-acid', title: '4.7 - Adjustment Without a Label - Raise Stabilizer'},
            {link: '/chemical-adjustment-without-a-label-lower-chlorine', title: '4.8 - Adjustment Without a Label - Lower Chlorine'}
          ]
        },
        {
          title: 'Section 5 - Breakpoint Chlorination',
          subsections: [
            {link: '/intro-to-section-5', title: '5.0 - About This Section'},
            {link: '/calculate-breakpoint', title: '5.1 - Calculate Breakpoint'},
            {link: '/breakpoint-chemical-adjustment', title: '5.2 - Breakpoint Chemical Adjustment'}
          ]
        },
        {
          title: 'Section 6 - Flow Rate and Turnover Rate',
          subsections: [
            {link: '/intro-to-section-6', title: '6.0 - About This Section'},
            {link: '/turnover-rate-of-a-pool', title: '6.1 - Calculate Turnover Rate - Pool'},
            {link: '/turnover-rate-of-a-hot-tub', title: '6.2 - Calculate Turnover Rate - Hot Tub'},
            {link: '/flow-rate-of-a-pool', title: '6.3 - Calculate Flow Rate - Pool'},
            {link: '/flow-rate-of-a-hot-tub', title: '6.4 - Calculate Flow Rate - Hot Tub'}
          ]
        },
        {
          title: 'Section 7 - Filter Sizing and Max Flow',
          subsections: [
            {link: '/intro-to-section-7', title: '7.0 - About This Section'},
            {link: '/diatomaceous-earth-calculate-filter-size', title: '7.1 - Diatomaceous Earth - Calculate Filter Size'},
            {link: '/diatomaceous-earth-filter-size-required', title: '7.2 - Diatomaceous Earth - Filter Size Required'},
            {link: '/diatomaceous-earth-filter-max-flow-provided', title: '7.3 - Diatomaceous Earth - Max Flow Provided'},
            {link: '/sand-filter-calculate-filter-size', title: '7.4 - Sand Filter - Calculate Filter Size'},
            {link: '/sand-filter-size-required', title: '7.5 - Sand Filter - Filter Size Required'},
            {link: '/sand-filter-max-flow-provided', title: '7.6 - Sand Filter - Max Flow Provided'},
            {link: '/cartridge-filter-size-required', title: '7.7 - Cartridge Filter - Filter Size Required'},
            {link: '/cartridge-filter-max-flow-provided', title: '7.8 - Cartridge Filter - Max Flow Provided'}
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  aside {
    overflow-y: auto;
    height: 100%;
  }

  aside ul {
    background-color: #424242 !important;
  }
 
  .list-item--link-bottom-border {
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }
  
</style>
