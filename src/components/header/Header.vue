<template lang="pug">
  v-toolbar.mt-0(dark)
    app-NavDrawer
    router-link(to="/" tag="v-toolbar-title") Pool Math
    v-spacer
    v-toolbar-items
      v-btn.button--default-size(color="success" :href="`mailto:smellydogcoding@gmail.com`") Contact Me
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
  .toolbar__items { align-items: center; }
  .button--default-size { height: 36px; }
  @media screen and (max-width: 360px) {
    .toolbar__title { font-size: 1.25rem; }
    .btn { font-size: 0.75rem; line-height: 0.75rem; }
  }
</style>