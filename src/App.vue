<template lang="pug">
  v-app
    app-header
    transition(name="slide" mode="out-in")
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

  /* for route transitions - page slides under the nav bar */
  nav { z-index: 6; }
  
  .content--wrap { align-items: center; }
  
  /*background image opacity*/
  .content--wrap::before {
    content: "";
    background-image: url('../public/water.jpg');
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;   
  }
  
  .content, footer { z-index: 1; }
  
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

  .slide-enter-active, .slide-leave-active {
    transition: all 1s; 
  }
  
  .slide-enter { opacity: 0; }
  .slide-leave-to { transform: translateY(-100%); }

</style>