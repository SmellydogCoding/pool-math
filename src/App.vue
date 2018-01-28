<template lang="pug">
  v-app
    app-header
    router-view
    v-footer(app dark)
      span &copy; 2018 #[a(href="http://www.smellydogcoding.com") Smellydog Coding]
</template>

<script>
  import Header from './components/header/Header.vue'
  
  export default {
    data () { return {} },
    components: {
      appHeader: Header,
    }
  }
</script>

<style>
  html {
    overflow-y: auto;
  }
  .ma-a {
    margin: auto;
  }
  a {
    text-decoration: none;
  }
  .active {
      background-color: rgba(0,0,0,0.17) !important;
    }
  li.active > a {
    color: #1976d2 !important;
  }
  footer {
    color: white;
  }
</style>