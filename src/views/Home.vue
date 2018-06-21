<template lang="pug">
  v-content.text-xs-center
    v-container.d-inline-flex
      v-layout(align-center)
        v-flex
          p.display-1 Welcome to Pool Math
          p.title Practice math problems that you need to master in order to become a successful pool operator.
          v-btn(color="success" dark @click="$router.push(nextRoute)") Let's Get Started!
</template>

<script>
export default {
  data() {
    return {
      small: false,
      nextRoute: '/how-to-use-this-website'
    }
  }
}
</script>

<style scoped>
  .content--wrap { background-image: url('../assets/home.jpg'); }
  .content--wrap::before { background: none; }
  .content--wrap { align-items: center; }
  
  .container {
    background-color: rgba(200,200,200,0.8);
    width: inherit;
    margin: auto;
  }
  
</style>