<template lang="pug">
  div
    v-toolbar-side-icon(@click="drawer = !drawer")
    v-navigation-drawer(v-model="drawer" dark fixed temporary)
      v-list.pa-1
        v-list-tile(avatar tag="div")
          v-list-tile-avatar
            img(src="../../../public/v.png")
          v-list-tile-content
            v-list-tile-title Guest
          v-list-tile-action
            v-btn(icon @click="drawer = !drawer")
              v-icon close
      v-list.pt-0(dense)
        v-divider(light)
        router-link(to="/s1p0" tag="v-list-tile" active-class="active").expansion-panel__header.how-to
          v-list-tile-content
            v-list-tile-title.text-xs-center How to Use This Website
        v-expansion-panel
          v-expansion-panel-content
            div(slot="header") Section 1 - Conversions
            router-link(to="/s1p0" tag="v-list-tile" active-class="active")
              v-list-tile-content
                v-list-tile-title 1.0 - Useful Conversions
            router-link(to="/s1p1" tag="v-list-tile" active-class="active")
              v-list-tile-content
                v-list-tile-title 1.1 - Convert ounces to pounds
            router-link(to="/s1p2" tag="v-list-tile" active-class="active")
              v-list-tile-content
                v-list-tile-title 1.2 - Convert fluid ounces to gallons
            router-link(to="/s1p3" tag="v-list-tile" active-class="active")
              v-list-tile-content
                v-list-tile-title 1.3 - Convert fluid ounces to cups
            router-link(to="/s1p4" tag="v-list-tile" active-class="active")
              v-list-tile-content
                v-list-tile-title 1.4 - Convert inches to feet
          v-expansion-panel-content
            div(slot="header") Section 2 - Area and Volume
            router-link(to="/s2p0" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.0 - Introduction to This Section
            router-link(to="/s2p1" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.1 - Area of a Swimming Pool
            router-link(to="/s2p2" tag="v-list-tile" active-class="list__tile--active")
              v-list-tile-content
                  v-list-tile-title 2.2 - Area of a Hot Tub
            router-link(to="/s2p3" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.3 - Volume of Water in a Swimming Pool
            router-link(to="/s2p4" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.4 - Volume of Water in a Multi-Depth Pool
            router-link(to="/s2p5" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.5 - Volume of Water in a Hot Tub
            router-link(to="/s2p6" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.6 - Volume of Water in a Hot Tub with Seats
            router-link(to="/s2p7" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.7 - Volume of Water Loss in a Swimming Pool
            router-link(to="/s2p8" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 2.8 - Volume of Water Loss in a Hot Tub
          v-expansion-panel-content
            div(slot="header") Section 3 - Water Balance
            router-link(to="/s3p0" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 3.0 - Introduction to This Section
            router-link(to="/s3p1" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 3.1 - Calculate Saturation Index
            router-link(to="/s3p2" tag="v-list-tile" active-class="active")
              v-list-tile-content
                  v-list-tile-title 3.2 - Calculate Saturation Index - With CA
</template>

<script>
export default {
  data() { return { drawer: false } }
}
</script>

<style scoped>
  aside {
    overflow-y: auto;
  }
  .navigation-drawer {
    padding: 0 0 1.0rem;
  }
  .how-to {
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }
  .how-to .list__tile__title {
    font-size: 1.15rem;
  }
  .active {
    background-color: rgba(0,0,0,0.17) !important;
  }
  .active .list__tile--link {
    color: #1976d2 !important;
  }
</style>
