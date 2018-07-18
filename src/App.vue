<template lang="pug">
  v-app
    app-header
    transition(name="slide" mode="out-in")
      router-view
    v-footer(app dark)
      span &copy; 2018 #[span.blue--text.darken-4 Smellydog Coding]
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
