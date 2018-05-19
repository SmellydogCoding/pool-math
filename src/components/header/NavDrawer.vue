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
        router-link.list-item--link-bottom-border.py-2(to="/howto" tag="v-list-tile" active-class="active")
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
            {link: '/s1Intro', title: '1.0 - About This Section'},
            {link: '/s1p1', title: '1.1 - Convert Ounces to Pounds'},
            {link: '/s1p2', title: '1.2 - Convert Fluid Ounces to Gallons'},
            {link: '/s1p3', title: '1.3 - Convert Fluid Ounces to Cups'},
            {link: '/s1p4', title: '1.4 - Convert Yards to Feet'},
            {link: '/s1p5', title: '1.5 - Convert Inches to Feet'}
          ]
        },
        {
          title: 'Section 2 - Area and Volume',
          subsections: [
            {link: '/s2Intro', title: '2.0 - About This Section'},
            {link: '/s2p1', title: '2.1 - Area of a Swimming Pool'},
            {link: '/s2p2', title: '2.2 - Area of a Hot Tub'},
            {link: '/s2p3', title: '2.3 - Volume of Water in a Swimming Pool'},
            {link: '/s2p4', title: '2.4 - Volume of Water in a Multi-Depth Pool'},
            {link: '/s2p5', title: '2.5 - Volume of Water in a Hot Tub'},
            {link: '/s2p6', title: '2.6 - Volume of Water in a Hot Tub With Seats'},
            {link: '/s2p7', title: '2.7 - Volume of Water Loss in a Swimming Pool'},
            {link: '/s2p8', title: '2.8 - Volume of Water Loss in a Hot Tub'}
          ]
        },
        {
          title: 'Section 3 - Water Balance',
          subsections: [
            {link: '/s3Intro', title: '3.0 - About This Section'},
            {link: '/s3p1', title: '3.1 - Calculate Saturation Index'},
            {link: '/s3p2', title: '3.2 - Calculate Saturation Index - With CA'}
          ]
        },
        {
          title: 'Section 4 - Chemical Adjustments',
          subsections: [
            {link: '/s4Intro', title: '4.0 - About This Section'},
            {link: '/s4p1', title: '4.1 - Adding an algaecide'},
            {link: '/s4p2', title: '4.2 - Chemical Adjustment with a Label'},
            {link: '/s4p3', title: '4.3 - Chemical Adjustment - no label - Raise Chlorine'},
            {link: '/s4p4', title: '4.4 - Chemical Adjustment - no label - Raise Alkalinity'},
            {link: '/s4p5', title: '4.5 - Chemical Adjustment - no label - Lower Chlorine'}
          ]
        },
        {
          title: 'Section 5 - Breakpoint Chlorination',
          subsections: [
            {link: '/s5Intro', title: '5.0 - About This Section'},
            {link: '/s5p1', title: '5.1 - Calculate Breakpoint'},
            {link: '/s5p2', title: '5.2 - Breakpoint Chemical Adjustment'}
          ]
        },
        {
          title: 'Section 6 - Flow Rate and Turnover Rate',
          subsections: [
            {link: '/s6Intro', title: '6.0 - About This Section'},
            {link: '/s6p1', title: '6.1 - Calculate Turnover Rate - Pool'},
            {link: '/s6p2', title: '6.2 - Calculate Turnover Rate - Hot Tub'},
            {link: '/s6p3', title: '6.3 - Calculate Flow Rate - Pool'},
            {link: '/s6p4', title: '6.4 - Calculate Flow Rate - Hot Tub'}
          ]
        },
        {
          title: 'Section 7 - Filter Sizing',
          subsections: [
            {link: '/s7Intro', title: '7.0 - About This Section'},
            {link: '/s7p1', title: '7.1 - Diatomaceous Earth - Filter Size'},
            {link: '/s7p2', title: '7.2 - Diatomaceous Earth - Max Flow'},
            {link: '/s7p3', title: '7.3 - Sand Filter - Filter Size'},
            {link: '/s7p4', title: '7.4 - Sand Filter - Max Flow'},
            {link: '/s7p5', title: '7.5 - Cartridge Filter - Filter Size'},
            {link: '/s7p6', title: '7.6 - Cartridge Filter - Max Flow'}
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
    background: none !important;
  }

  aside ul {
    background-color: #424242 !important;
  }
 
  .list-item--link-bottom-border {
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }
  
</style>
