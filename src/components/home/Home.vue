<template lang="pug">
  v-container
    v-layout(align-center)
      v-flex.text-xs-center
        p.display-1 Welcome to Pool Math
        p.title Practice math problems that you need to master in order to pass the Certified Pool Operator Exam.
        v-btn Let's Get Started!
</template>

<script>
export default {
  
}
</script>

<style>
  .content--wrap {
    background-image: url('../../../public/pool.png');
    align-items: flex-end;
  }
</style>