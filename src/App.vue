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
  /*Global Styles*/
  
  html { overflow-y: auto; }
  
  /*Change text color for light themed button*/
  .color--white {
    color: #fff !important;
  }
  
  .ma-a { margin: auto; }
  
  a { text-decoration: none; }
  
   .content--wrap {
    background-image: url('../public/water.jpg');
    background-size: cover;
    align-items: center;
  }
  
  .active { background-color: rgba(0,0,0,0.17) !important; }
  
  li.active > a { color: #1976d2 !important; }
  
  .align-stepper-bottom {
    position: absolute;
    bottom: 0;
  }
  
  footer { color: white; }
  
  .problem-image { width: 80%; }
  
  @media screen and (max-width: 600px) {
    .display-1 { font-size: 2.125rem !important; }
    .title { font-size: 1.25rem !important; }
    .subheading { font-size: 0.875rem !important; }
    .dialog--active { width: 60%; }
  }
</style>