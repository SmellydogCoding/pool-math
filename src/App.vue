<template lang="pug">
  v-app
    app-NavDrawer
    app-header
    router-view
    v-footer(app dark)
      span &copy; 2017
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
