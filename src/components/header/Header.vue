<template lang="pug">
  v-toolbar.mt-0(dark)
    v-toolbar-side-icon(@click.stop="openDrawer")
    router-link(to="/" tag="v-toolbar-title") Pool Math
    v-spacer
    v-toolbar-items.hidden-sm-and-down.pa-2
      v-btn(color="info" dark) Sign In
      v-btn.ml-4(color="success" dark) Sign Up
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    openDrawer() {
      this.$store.dispatch('drawerControl', 'open')
    }
  }
}
</script>

<style scoped>
  .toolbar__title {
    cursor: pointer;
  }
</style>