<template lang="pug">
  v-toolbar.mt-0(dark)
    app-NavDrawer
    router-link(to="/" tag="v-toolbar-title") Pool Math
</template>

<script>
import NavDrawer from './NavDrawer.vue'

export default {
  components: {
    appNavDrawer: NavDrawer
  }
}
</script>

<style scoped>
  .toolbar__title {
    cursor: pointer;
  }
</style>