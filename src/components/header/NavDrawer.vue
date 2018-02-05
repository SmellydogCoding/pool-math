<template lang="pug">
  div
    v-toolbar-side-icon(@click="drawer = !drawer")
    v-navigation-drawer(v-model="drawer" dark fixed temporary :width="width")
      v-list.pa-1
        v-list-tile(avatar tag="div")
          v-list-tile-avatar
            img(:src="avatar")
          v-list-tile-content
            v-list-tile-title {{ title }}
          v-list-tile-action
            v-btn(icon @click="drawer = !drawer")
              v-icon close
      v-list.pt-0(dense)
        v-divider(light)
        router-link.how-to.py-2(to="/howto" tag="v-list-tile" active-class="active")
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
      avatar: '../../../public/buoy.jpg',
      title: 'Menu',
      menu: [
        {
          title: 'Section 1 - Conversions',
          subsections: [
            {link: '/s1p0', title: '1.0 - About This Section'},
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
            {link: '/s2p0', title: '2.0 - About This Section'},
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
            {link: '/s3p0', title: '3.0 - About This Section'},
            {link: '/s3p1', title: '3.1 - Calculate Saturation Index'},
            {link: '/s3p2', title: '3.2 - Calculate Saturation Index - With CA'}
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
  }
 
  .how-to {
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }
  
</style>
