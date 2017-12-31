<template lang="pug">
  v-app
    app-NavDrawer
    app-header
    v-content
      app-home
    v-footer(app dark)
      span &copy; 2017
</template>

<script>
  import Header from './components/header/Header.vue'
  import NavDrawer from './components/header/NavDrawer.vue'
  import Home from './components/home/home.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      appHeader: Header,
      appHome: Home,
      appNavDrawer: NavDrawer
    }
  }
</script>

<style scoped>
  .content--wrap {
    background-image: url('../public/pool.png');
    align-items: flex-end;
  }
</style>
