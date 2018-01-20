<template lang="pug">
  div
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    v-navigation-drawer(temporary v-model="drawer" dark absolute)
      v-list.pa-1
        v-list-tile(avatar tag="div")
          v-list-tile-avatar
            img(src="../../../public/v.png")
          v-list-tile-content
            v-list-tile-title Guest
          v-list-tile-action
            v-btn(icon @click.stop="drawer = !drawer")
              v-icon close
      v-list.pt-0(dense)
        v-divider(light)
        v-list-tile
          v-list-tile-content
            v-list-tile-title About This Course
        v-list-tile
          v-list-tile-content
            v-list-tile-title Section 1 - Conversions
        v-list-tile(@click="")
          v-list-tile-content
            router-link(to="/s2p1" tag="v-list-tile-title" active-class="active") Section 2 - Area and Volume
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>
  aside {
    height: inherit !important;
  }
</style>
