<template lang="pug">
  v-toolbar.mt-0(dark)
    //- app-NavDrawer
    v-toolbar-side-icon(@click.stop="openDrawer")
    router-link(to="/" tag="v-toolbar-title") Pool Math
</template>

<script>
// import NavDrawer from './NavDrawer.vue'

export default {
  // components: {
  //   appNavDrawer: NavDrawer
  // }
  methods: {
    openDrawer() {
      this.$store.dispatch('navDrawer','open');
    }
  }
}
</script>

<style scoped>
  .toolbar__title {
    cursor: pointer;
  }
</style>