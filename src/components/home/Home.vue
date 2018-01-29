<template lang="pug">
  v-content.text-xs-center
    v-container.d-inline-flex
      v-layout(align-center)
        v-flex
          p.display-1 Welcome to Pool Math
          p.title Practice math problems that you need to master in order to pass the Certified Pool Operator Exam.
          v-btn(color="success" dark @click="letsGo") Let's Get Started!
</template>

<script>
export default {
  methods: {
    letsGo() { this.$router.push('/howto'); }
  }
}
</script>

<style scoped>
  .content--wrap { background-image: url('../../../public/pool.png'); }
  
  .container {
    background-color: rgba(200,200,200,0.8);
    width: inherit;
    margin: auto;
  }
  
</style>