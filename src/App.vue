<template lang="pug">
  v-app
    app-NavDrawer
    app-header
    router-view
    v-footer(app dark)
      span &copy; 2018 Smellydog Coding
</template>

<script>
  import Header from './components/header/Header.vue'
  import NavDrawer from './components/header/NavDrawer.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      appHeader: Header,
      appNavDrawer: NavDrawer
    }
  }
</script>

<style>
 footer {
   color: white;
 }
</style>