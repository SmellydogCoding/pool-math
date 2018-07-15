<template lang="pug">
   v-card-text
    v-layout(row wrap justify-center text-xs-center)
      v-flex(xs12 md6).pr-2
        p.subheading.ma-a Surface Area of a Pool:
        p.body-2.ma-a.mb-2 Length * Width
        img.shrink-to-fit(:src="src1" :alt="alt1")
      v-flex(xs12 md6).pl-2
        p.subheading.ma-a Surface Area of a Hot Tub:
        p.body-2.ma-a.mb-2 Radius * Radius * 3.14
        img.shrink-to-fit(:src="src2" :alt="alt2")
</template>

<script>
export default {
  data() {
    return { 
      src1: require('../../assets/section2/problem1.jpg'), 
      alt1: 'area of a pool', 
      src2: require('../../assets/section2/problem2.jpg'), 
      alt2: 'area of a hot tub' }
  }
}
</script>

<style scoped>
  @media screen and (max-width: 960px) {
    .xs12 { padding: 0 !important; }
  }
</style>
