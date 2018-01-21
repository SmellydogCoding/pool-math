<template lang="pug">
  v-toolbar.mt-0(dark)
    v-toolbar-side-icon(@click.stop="drawer = !drawer")
    router-link(to="/" tag="v-toolbar-title") Pool Math
</template>

<script>

export default {
  
}
</script>

<style scoped>
  .toolbar__title {
    cursor: pointer;
  }
</style>