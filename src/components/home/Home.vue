<template lang="pug">
  v-content
    v-container
      v-layout(align-center)
        v-flex.text-xs-center
          p.display-1 Welcome to Pool Math
          p.title Practice math problems that you need to master in order to pass the Certified Pool Operator Exam.
          v-btn(color="success" dark) Let's Get Started!
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .content--wrap {
    background-image: url('../../../public/pool.png');
    background-size: cover;
    align-items: center;
  }
  .container {
    background-color: rgba(200,200,200,0.8)
  }
  @media screen and (max-width: 960px) {
    .display-1 {
      font-size: 2.0rem !important;
    }
    .title {
      font-size: 1.25rem !important;
    }
  }
</style>