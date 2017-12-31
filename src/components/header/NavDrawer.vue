<template lang="pug">
  v-navigation-drawer(temporary v-model="drawerState" dark absolute)
    v-list.pa-1
      v-list-tile(avatar tag="div")
        v-list-tile-avatar
          img(src="../../../public/v.png")
        v-list-tile-content
          v-list-tile-title Guest
        v-list-tile-action
          v-btn(icon @click.stop="closeDrawer")
            v-icon close
    v-list.pt-0(dense)
      v-divider(light)
      v-list-tile
        v-list-tile-content
          v-list-tile-title About This Course
      v-list-tile
        v-list-tile-content
          v-list-tile-title Chapter 1 - Conversions
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    drawerState() {
      return this.$store.getters.drawerState
    }
  },
  methods: {
    closeDrawer() {
      this.$store.dispatch('drawerControl', 'close')
    }
  }
}
</script>
