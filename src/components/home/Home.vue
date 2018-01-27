<template lang="pug">
  v-content.text-xs-center
    v-container.d-inline-flex
      v-layout(align-center)
        v-flex
          p.headline.hidden-lg-and-up Welcome to Pool Math
          p.display-1.hidden-md-and-down Welcome to Pool Math
          p.subheading.hidden-lg-and-up Practice math problems that you need to master in order to pass the Certified Pool Operator Exam.
          p.title.hidden-md-and-down Practice math problems that you need to master in order to pass the Certified Pool Operator Exam.
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
  .content--wrap {
    background-image: url('../../../public/pool.png');
    background-size: cover;
    align-items: center;
  }
  .container {
    background-color: rgba(200,200,200,0.8);
    width: inherit;
    margin: auto;
  }
</style>