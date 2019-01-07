<template lang="pug">
  v-app
    app-header
    transition(name="slide" mode="out-in")
      router-view
    v-footer.px-3(app dark)
      span &copy; {{ new Date().getFullYear() }} &nbsp; #[a(href="http://www.smellydogcoding.com") Smellydog Coding]
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
